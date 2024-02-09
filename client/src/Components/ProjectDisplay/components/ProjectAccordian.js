import React, { useEffect, useState } from 'react';
import "./ProjectAccordian.css";
import OneReview from './OneReview';

const ProjectAccordian = (myproject) => {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [ReviewText, setReviewText] = useState({
    review: "", 
  });
  const [rev, setRev] = useState("");
  useEffect(() => {
    const getUserinfo = async(req, res) => {
      var response = await fetch("http://localhost:3001/api/fullinfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: localStorage.getItem("user_id") }),
        });
        response = await response.json();
        setUser(response);
        setLoading(false);
    }

    getUserinfo();
  },[]);
  if(loading){
    return (
      <div>
        loading...
      </div>
    )
  }
  let project = JSON.parse(JSON.stringify(myproject));
  if (!project.techstacks) project.techstacks = [""];
  if(!project.SkillsReq) project.SkillsReq=[""];
  console.log(project.reviews);



  function handleChange(event) {
    const { name,value } = event.target;
    setRev(event.target.value);

    setReviewText(prevReviewText => {
      return {
        ...prevReviewText,
        [name]: value
      };
    });
  }

  const handleReviewSubmit = async () => {
    // Add the current review to the reviews state
    setReviews(prevReviews => [...prevReviews, ReviewText.review]);
    // Reset the review input
    
  var response = await fetch("http://localhost:3001/api/add-review", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ans_user:localStorage.getItem("user_id"), proj_id: project.id, ans_info: rev})
    });
    response = await response.json();
    setReviewText({ review: "" });
  };


  return (
    <ul class="accordian">
      <li class="accordianHeading">
        <input type="checkbox" name="accordian" id="first" />
        <label for="first" class="contentHead">
          {" "}
          Description
        </label>
        <div class="content">
          <p>{project.description}</p>
        </div>
      </li>
      <li class="accordianHeading">
        <input type="checkbox" name="accordian" id="second" />
        <label for="second" class="contentHead">
          {" "}
          Tech Stack
        </label>
        <div class="content">
          <ul>
            {project.techstacks.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </li>
       <li className="accordianHeading">
        <input
          type="checkbox"
          name="accordian"
          id="third"
          checked={isReviewsOpen}
          onChange={() => setIsReviewsOpen(!isReviewsOpen)}
        />
        <label htmlFor="third" className="contentHead">
          Reviews
        </label>
        <div className="content">
          {isReviewsOpen && (
            <>
              <input
                className='ProjectDisplay_Review'
                name="review"
                value={ReviewText.review}
                onChange={handleChange}
                placeholder="Enter your review here"
              />
              <button className='ProjectDisplay_Review_Button' onClick={handleReviewSubmit}>Submit</button>
            </>
          )}
          <div>
            {reviews.length ? reviews.map((review, index) => (
              <div className="reviewDisplay" key={index}>
                <div className="reviewAuthor">{user.name}</div> {/* Author label */}
                {review}
              </div>
            )): ""}
          </div>
          <div>
            {project.reviews.map(revieww => (
                <OneReview revieww = {revieww} />
              ))}
          </div>
          
        </div>
      </li>

      <li class="accordianHeading" projectStatus>
        <input type="checkbox" name="accordian" id="fourth" />
        <label for="fourth"> Skills Required</label>
        <div class="content">
          <ul>
            {project.SkillsReq.map((skills) => (
              <li>{skills}</li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default ProjectAccordian;

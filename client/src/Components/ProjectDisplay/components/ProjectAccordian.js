import React, { useState } from 'react';
import "./ProjectAccordian.css";

const ProjectAccordian = (myproject) => {
  let project = JSON.parse(JSON.stringify(myproject));
  if (!project.techstacks) project.techstacks = [""];
  if(!project.SkillsReq) project.SkillsReq=[""];
  console.log(project);

    const [isReviewsOpen, setIsReviewsOpen] = useState(false);
   const [ReviewText, setReviewText] = useState({
    review: "", 
  });
  const [reviews, setReviews] = useState([]);


  function handleChange(event) {
    const { name,value } = event.target;

    setReviewText(prevReviewText => {
      return {
        ...prevReviewText,
        [name]: value
      };
    });
  }

  const handleReviewSubmit = () => {
    // Add the current review to the reviews state
    setReviews(prevReviews => [...prevReviews, ReviewText.review]);
    // Reset the review input
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
            {reviews.map((review, index) => (
              <div className="reviewDisplay" key={index}>
                <div className="reviewAuthor">Satvik</div> {/* Author label */}
                {review}
        </div>
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

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddCourseForm.css'
import MainNavbar from "../../Assets/MainNavbar";



const AddCourseForm = () => {  
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [platform, setPlatform] = useState('');
  const [coursetype, setCoursetype] = useState('');
  const [course_link, setCourse_link] = useState('');
  const [review, setReview] = useState('');
  const user_id = localStorage.getItem("user_id"); 

//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     try{
//      var temp= await fetch("http://localhost:3001/api/addproject", {
//           method: 'POST', 
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({userId: user_id, description: description, github_link: github_link, completed: completed, techstacks: techstacks, name: name, projecttype: projecttype})
//       });
//       console.log("hello");
//       navigate('/myprofile');
//       console.log("hi");
//     }catch(error){
//       console.log(error);
//     }
//   };

  return (
    <>
      <MainNavbar />
      <div className="AddCourseForm-update">
        <h2 className="AddCourseForm-h2">Add Course</h2>
        <form>
        <label className="AddCourseForm-lable">Course Name</label>
          <input
            className="AddCourseForm-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="AddCourseForm-lable">Istructor</label>
          <input
            className="AddCourseForm-input"
            type="text"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            required
          />
          <label className="AddCourseForm-lable">Platform</label>
          <input
            className="AddCourseForm-input"
            placeholder="eg: youtube,udemy"
            type="text"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            required
          />
          
          <label className="AddCourseForm-lable">CourseType</label>
          <select
            className="AddCourseForm-select"
            value={coursetype}
            onChange={(e) => setCoursetype(e.target.value)}
            required
          >
            <option value="Online">Online</option>
            <option value="Academic">Academic</option>
          </select>
        
          <label className="AddCourseForm-lable">Course Review</label>
          <textarea
            className="AddCourseForm-textarea"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
          <label className="AddCourseForm-lable">Course Link</label>
          <input
            className="AddCourseForm-input"
            type="text"
            value={course_link}
            onChange={(e) => setCourse_link(e.target.value)}
            required
          />

          <button className="AddCourseForm-submit" /*onClick={handleSubmit}*/>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCourseForm;

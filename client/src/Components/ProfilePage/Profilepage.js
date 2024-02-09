import { useEffect, useState } from 'react'
import Maincontent from './Maincontent'
// import MainNavbar from '../../Assets/MainNavbar'
// import './profilepage.css'
// import Footer from '../Footer/Footer'

const Profilepage = ({}) => { 
  const [user, setUser] = useState();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [collabs, setCollabs] = useState([]);
  useEffect(() => {
      const getUserinfo = async() => {
          try{
              var response = await fetch("http://localhost:3001/api/fullinfo", {
                  method: 'POST', 
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({user_id: localStorage.getItem("user_id")})
              });
              response = await response.json();
              setUser(response);

              var response2 = await fetch("http://localhost:3001/api/my-projects", {
                  method: 'POST', 
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({user_id: localStorage.getItem("user_id")})
              });
              response2 = await response2.json();
              setProjects(response2);

              var response3 = await fetch("http://localhost:3001/api/mycourses", {
                  method: "POST",
                  headers: {
                  "Content-Type": "application/json",
                  },
                  body: JSON.stringify({user_id: localStorage.getItem("user_id")})
              });
              response3 = await response3.json();
              setCourses(response3);

              var response4 = await fetch("http://localhost:3001/api/get-collabs", {
                  method: 'POST', 
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({user_id: localStorage.getItem("user_id")})
              });
              response4 = await response4.json();
              setCollabs(response4);
            //   setProjects(response2);
              
              setLoading(false);
          } catch(error){
              console.log(error);
          }
      }
      getUserinfo();
  }, []);
  if(loading){
    return(
      <div>
        loading...
      </div>
    )
  }
  
      //  projects = [
      //   { projName: "proj1", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg" },
      //   { projName: "proj2", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
      //   { projName: "proj3", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg" },
      //   { projName: "proj4", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
      //   { projName: "proj5", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg" },
      //   { projName: "proj6", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
      //   { projName: "proj7", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
      //   { projName: "proj8", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
      //   { projName: "proj9", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
        
      // ]
    //   const collabs = []
      const coursess = [
        { courseName: "course1", author: "NetNinja", techStack: "HTML", upvotes: 3, downvotes: 3, courseReview: "This is a very good course. It has helped me a lot." },
        { courseName: "course2", author: "NetNinja", techStack: "HTML", upvotes: 3, downvotes: 3, courseReview: "This is a very good course. It has helped me a lot." },
        { courseName: "course3", author: "NetNinja", techStack: "HTML", upvotes: 3, downvotes: 3, courseReview: "This is a very good course. It has helped me a lot." },
      ]
    return (
        <>
            {/* {console.log(collabs)} */}
            {/* <MainNavbar/> */}
            <Maincontent userinfo={user} courses={courses} projects={projects} collabs={collabs}/>
            {/* <Footer /> */}

        </>
    );
}

export default Profilepage;
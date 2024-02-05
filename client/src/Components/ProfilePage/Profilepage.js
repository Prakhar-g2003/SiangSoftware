import { useEffect, useState } from 'react'
import Footer from './Footer'
import Maincontent from './Maincontent'
import Navbar from './Navbar'
// import './profilepage.css'

const Profilepage = ({ userinfo, courses, projects }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/profile');
          const data = await response.json();
          setItems(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  
     userinfo = {
        username: "Shobhit",
        branch: "Coumputer Science and Engineering",
        course: "Btech Engineering",
        yearofgrad: "2026",
        email: "shobhit25gupta@gmail.com",
        phone_no: "9873187481",
        linkedInprofile: "https://www.linkedin.com/in/shobhit-gupta25/",
        instaprofile: "https://www.instagram.com/shobyy.25/",
        githubprofile: "https://github.com/shobyy25",
        aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris vel urna ultrices, ac congue lacus condimentum. Integer nec elit eu metus ullamcorper bibendum. Nullam ullamcorper, urna eget condimentum fermentum, elit felis ultricies orci, vitae malesuada nulla dui in lacus."
      }
       projects = [
        { projName: "proj1", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg" },
        { projName: "proj2", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
        { projName: "proj3", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg" },
        { projName: "proj4", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
        { projName: "proj5", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg" },
        { projName: "proj6", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
        { projName: "proj7", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
        { projName: "proj8", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
        { projName: "proj9", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
        
      ]
       courses = [
        { courseName: "course1", author: "NetNinja", techStack: "HTML", upvotes: 3, downvotes: 3, courseReview: "This is a very good course. It has helped me a lot." },
        { courseName: "course2", author: "NetNinja", techStack: "HTML", upvotes: 3, downvotes: 3, courseReview: "This is a very good course. It has helped me a lot." },
        { courseName: "course3", author: "NetNinja", techStack: "HTML", upvotes: 3, downvotes: 3, courseReview: "This is a very good course. It has helped me a lot." },
      ]
    return (
        <>
            <Navbar/>
            <Maincontent userinfo={userinfo} courses={courses} projects={projects}/>
            {/* <Footer /> */}

        </>
    );
}

export default Profilepage;
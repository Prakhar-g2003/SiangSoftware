// Maincontent.js
import { useNavigate, useLocation } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
// import './profilepage.css';
import blank_profile_pic from './blank_profile_pic.webp';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import 'react-multi-carousel/lib/styles.css';
import './OthersProfile.css';

const OthersProfile = ({user}) => {
    let navigate = useNavigate();
    
    function handleClick(project){
        console.log('clicked ' + project.id);
        navigate('/ProjectDisplay', {state: {project: project}});
    }

    const location = useLocation();
    console.log(location.state.user);
    user = location.state.user;
    const [userinfo, setUserinfo] = useState();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [courses, setCourses] = useState([]);
    const [collabs, setCollabs] = useState([]);
    useEffect(() => {
        const getUserinfo = async () => {
            try {
                var response = await fetch("http://localhost:3001/api/fullinfo", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_id:  user.id})
                });
                response = await response.json();
                setUserinfo(response);

                var response2 = await fetch("http://localhost:3001/api/my-projects", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_id:  user.id })
                });
                response2 = await response2.json();
                setProjects(response2);

                // var response3 = await fetch("http://localhost:3001/api/courses", {
                //     method: "GET",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                // });
                // response3 = await response3.json();
                // setCourses(response3);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getUserinfo();
    }, []);
    if (loading) {
        return (
            <div>
                loading...
            </div>
        )
    }
    else if(userinfo.id === localStorage.getItem("user_id")){
        navigate('/myprofile');
    }

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    // const userinfo = {
    //     name: "Shobhit",
    //     branch: "Computer Science Engineering",
    //     course: "B.tech",
    //     yearofgrad: 2025,
    //     phone_no: 8342374898,
    //     aboutme: "Hi this is me!",
    //     githubprofile: "https://github.com/shobyy25",
    //     linkedInprofile: "https://github.com/shobyy25",
    //     instagramprofile: "https://github.com/shobyy25"
    // }
    // const projects = [
    //     { name: "proj1", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg" },
    //     { name: "proj2", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
    //     { name: "proj3", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg" },
    //     { name: "proj4", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
    //     { name: "proj5", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg" },
    //     { name: "proj6", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
    //     { name: "proj7", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
    //     { name: "proj8", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },
    //     { name: "proj9", projInfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"], projImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxNcVtGf3MlGjkYPBDyf8Gl_ub7EziBF0aT5L28am1lzDnr6yrzEpjVPWHCl2TiKeGEc&usqp=CAU" },

    // ]
    const courses = [
        { courseName: "course1", author: "NetNinja", techStack: "HTML", upvotes: 3, downvotes: 3, courseReview: "This is a very good course. It has helped me a lot." },
        { courseName: "course2", author: "NetNinja", techStack: "HTML", upvotes: 3, downvotes: 3, courseReview: "This is a very good course. It has helped me a lot." },
        { courseName: "course3", author: "NetNinja", techStack: "HTML", upvotes: 3, downvotes: 3, courseReview: "This is a very good course. It has helped me a lot." },
    ]
    return (
        <>
            <div className='o-profile-container'>
                <div className='o-profile-left'>
                    <div className='o-card profile-info'>
                        <img src={blank_profile_pic} alt="Profile Picture" className="o-profile-picture" />
                        <div className='o-text-info'>
                            <h2>{userinfo.name}</h2>
                            <p>{userinfo.branch} {userinfo.course}, {userinfo.yearofgrad}</p>
                            <p>Phone no: {userinfo.phone_no}</p>
                            <a href={userinfo.githubprofile}>Github</a> | <a href={userinfo.linkedInprofile}>LinkedIn</a> | <a href={userinfo.instagramprofile}>Insta</a>
                        </div>
                    </div>
                    <div className='o-card'>
                        <div className='o-card-heading'>About Me</div>
                        <hr />
                        <p>{userinfo.aboutme}</p>

                    </div>
                    <div className='o-card'>
                        <div className='o-card-heading'>Projects</div>

                        <hr />
                        <div className='o-slide-container'>
                            <MdChevronLeft className='o-left' onClick={slideLeft} size={40} />
                            <div className="o-slider-container" style={{ maxWidth: '900px' }}>
                                <div className="o-slider" id="slider">
                                    {projects.map((project, index) => (
                                        <div key={index} className='o-project-card'>
                                            <div className='o-image-content'>
                                                <span className='o-overlay'></span>
                                                <div className='o-card-image'>
                                                    <img src={project.projImage} alt="" className="o-card-img"></img>
                                                </div>
                                            </div>
                                            <div className='o-card-content'>
                                                <h2 className='o-project-name'>{project.name}</h2>

                                                <button className='o-button' onClick={() => handleClick(project)}>View More</button>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                            <MdChevronRight className='o-right' onClick={slideRight} size={40} />
                        </div>
                    </div>
                    <div className='o-card'>
                        <div className='o-card-heading'>Courses</div>
                        <hr />

                        {courses.map((course, index) => (
                            <div key={index} className='o-course-card'>
                                <div className='o-course-info'>
                                    <div class='course-title-author'>
                                        <h3>{course.courseName}</h3>
                                        <span>|</span>
                                        <p>{course.author}</p>
                                    </div>
                                    <div className='o-tech-stack'>{course.techStack}</div>
                                    <div className='o-course-review'>{course.courseReview}</div>
                                </div>
                                <div className='o-course-stats'>
                                    <span className='o-upvotes'>👍 {course.upvotes}</span>
                                    <span className='o-downvotes'>👎 {course.downvotes}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

export default OthersProfile;

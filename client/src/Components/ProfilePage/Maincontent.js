// Maincontent.js
import {useNavigate}  from 'react-router-dom';
import React from 'react';
import './profilepage.css';
import blank_profile_pic from './blank_profile_pic.webp';
import pencil_image from './pencil_image.jpg';
import add_image from './add.png';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useState } from 'react';
// import 'react-multi-carousel/lib/styles.css';

const Maincontent = ({ userinfo, courses, projects }) => {
    let navigate = useNavigate();
    function handleClick(project){
        console.log('clicked ' + project.id);
        navigate('/ProjectDisplay', {state: {project: project}});
    }
    function handleEdit(){
        // console.log('clicked ' + project.id);
        navigate('/ProfileForm');
    }
    function handleAddProject(){
        // console.log('clicked ' + project.id);
        navigate('/AddProjectForm');
    }
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div className='profile-container'>
            <div className='profile-left'>
                <div className='card profile-info'>
                        <img src={blank_profile_pic} alt="Profile Picture" className="profile-picture" />
                        <div className='text-info'>
                            <h2>{userinfo.name}</h2>
                            <p>{userinfo.branch}</p>
                        </div>
                        <div className='edit-profile' onClick={handleEdit}>
                            <img src={pencil_image} alt="edit-profile-image" className='edit-profile-image'/>
                            <div className='edit-profile-text'>Edit Profile</div>
                        </div>
                    </div>
                <div className='card'>
                    <div className='card-heading'>About Me</div>
                    <hr/>
                    <p>{userinfo.aboutme}</p>

                </div>
                <div className='card'>
                    <div className='card-heading'>Projects</div>
                    <div className='edit-profile' onClick={handleAddProject}>
                            <img src={add_image} alt="edit-profile-image" className='add-project-image'/>
                            <div className='edit-profile-text'>Add Project</div>
                    </div>
                    <hr/>
                    <div className='slide-container'>
                        <MdChevronLeft className='left' onClick={slideLeft} size={40} />
                        <div className="slider-container" style={{ maxWidth: '900px' }}>
                        <div className="slider" id = "slider">
                        {projects.map((project, index)=>(
                            <div key={index} className='project-card'>
                                <div className='image-content'>
                                    <span className='overlay'></span>

                                    <div className='card-image'>
                                        <img src={project.projImage} alt="" class="card-img"></img> 
                                    </div>
                                </div>

                                <div className='card-content'>
                                    <h2 className='project-name'>{project.name}</h2>
                                    
                                    <button className='button' onClick={() => handleClick(project)}>View More</button>
                                </div>
                            </div>

                        ))
                        }
                        </div>
                        </div>
                        <MdChevronRight className='right' onClick={slideRight} size={40} />
                    </div>
                </div>
                <div className='card'>
                    <h2>Courses</h2>
                    <hr/>

                    {courses.map((course, index) => (
                    <div key={index} className='course-card'>
                        <div className='course-info'>
                        <div class='course-title-author'>
                            <h3>{course.courseName}</h3>
                            <span>|</span>
                            <p>{course.author}</p>
                        </div>
                        <div className='tech-stack'>{course.techStack}</div>
                        <div className='course-review'>{course.courseReview}</div>
                        </div>
                        <div className='course-stats'>
                        <span className='upvotes'>👍 {course.upvotes}</span>
                        <span className='downvotes'>👎 {course.downvotes}</span>
                        </div>
                    </div>
        ))}
                </div>
                
            </div>
            <div className='profile-right'>
                <div className='card'>

                </div>
                <div className='card'>
                </div>
            </div>
        </div>
    );
}

export default Maincontent;

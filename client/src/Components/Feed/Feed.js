import React from 'react'
import './Feed.css'
import ProjectCard from '../../Pages/Projects/ProjectCard'

function Feed({projects, user}) {
  function formatName(name) {
    // Split the name into words
    const words = name.split(' ');
  
    // Convert the first word to title case
    const firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
  
    // Join the words back together
    return firstName;
  }
  
  return (
    <div className='feed'>
        <div className='feed_starting'>
            <h1>Hi {formatName(user.name)}!</h1>
            <div className="projects-section">
              {
                projects&&projects.map((item,index)=>(
                  <ProjectCard key = {index} className={item ? 'specialCard' : ''} project={item}></ProjectCard>

                ))
              }
            </div>
            
        </div>

        
    </div>
  )
}

export default Feed

import React from 'react'
import './Feed.css'
import ProjectCard from '../../Pages/Projects/ProjectCard'

function Feed({projects}) {
  return (
    <div className='feed'>
        <div className='feed_starting'>
            <h1>Hi Satvik!</h1>
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

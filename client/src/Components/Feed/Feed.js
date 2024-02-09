import React, { useState } from "react";
import "./Feed.css";
import ProjectCard from "../../Pages/Projects/ProjectCard";

function Feed({ projects, user }) {
  let [newProjects,SetNewProject]=useState([]);
  
  return (
    <div class="feed-main-overlay">
      <form>
        <input type="text" />
      </form>
      {projects.map((project) => (
        <ProjectCard project={project} user={user} />
      ))}
    </div>
  );
}

export default Feed;

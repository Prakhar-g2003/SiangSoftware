import React from "react";
import "./Feed.css";
import ProjectCard from "../../Pages/Projects/ProjectCard";

function Feed({ projects, user }) {
  return (
    <div class="feed-main-overlay">
      {projects.map((project) => (
        <ProjectCard project={project} user={user} />
      ))}
    </div>
  );
}

export default Feed;

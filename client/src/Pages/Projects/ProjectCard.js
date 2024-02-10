import * as React from "react";
import { useNavigate } from "react-router-dom";

import "./ProjectCard.css";
import CommentDropdown from "../../Components/AskHelper/components/DropDownComment";

export default function ProjectCard({ project, user }) {
  let navigate = useNavigate();
  function handleClick() {
    console.log("clicked " + project.id);
    navigate("/ProjectDisplay", { state: { project: project } });
  }
  let projectStatusMessage = "Ongoing";
  if (project.completed) {
    projectStatusMessage = "Completed";
  }
  console.log(project);
  return (
    <div className="projectCardOverlay" style={{backgroundColor:"white",color:"#1D3557"}}>
      <img
        src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
        class="projectMedia"
        onClick={handleClick}
      />
      <div className="projectCardInfo" >
        <div className="projectCardInfoHead">
          <div className="projectCardNameType">
            <div className="projectCardInfoName">{project.name}</div>
            <div className="projectCardInfoType">{project.projecttype}</div>
          </div>
          <div className="projectCardInfoStatus" style={{color:"#E63946"}}>{projectStatusMessage}</div>
        </div>
        <div className="projectCardInfoBody">
          <ul className="projectTechStack">
            {project.techstacks.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

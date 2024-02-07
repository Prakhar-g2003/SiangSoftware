import "./ProjectDisplay.css";
import ProjectCrousel from "./components/ProjectCrousel";
import Projecthead from "./components/Projecthead";
import ProjectAccordian from "./components/ProjectAccordian";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDisplay = ({ project }) => {
  const navigate = useNavigate();
  function handleClick(){
    console.log('clicked ' + project.id);
    navigate('/collabForm', {state: {project: project}});
  }
  const location = useLocation();
  console.log(location.state.project);
  project = location.state.project;
  return (
    <div class="overlay">
      <div class="mainContent">
        <Projecthead {...project} />

        <ProjectCrousel {...project} />
        <ProjectAccordian {...project} />
        <button onClick={handleClick}>Collab</button>
      </div>
    </div>
  );
};

export default ProjectDisplay;

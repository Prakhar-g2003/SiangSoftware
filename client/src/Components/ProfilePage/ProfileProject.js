import "./ProfileProject.css";
import { useNavigate } from "react-router-dom";

const ProfileProject = (project) => {
  let navigate = useNavigate();
  function handleClick(project) {
    console.log("clicked " + project.id);
    navigate("/ProjectDisplay", { state: { project: project } });
  }

  console.log("in comp");
  console.log({ project });
  return (
    <div className="ProfileProjectOverlay">
      <img
        className="profileProjectImage"
        src="https://images.unsplash.com/photo-1707070530152-1fc8f45ec3c0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="profileProjectName">{project.project.name}</div>
      <button
        className="profileProjectDisplay"
        onClick={() => handleClick(project)}
      >
        View More
      </button>
    </div>
  );
};

export default ProfileProject;

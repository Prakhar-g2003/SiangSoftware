import { useEffect, useState } from "react";
import Navbar from '../ProfilePage/Navbar'
import './AddProjectForm.css'




const AddProjectForm = () => {  
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);
  const [projecttype, setProjecttype] = useState('');
  const [techstacks, setTechstacks] = useState('');
  const [github_link, setGithub_link] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = ()=>{

  };

  return (
    <>  
        <Navbar></Navbar>
        <div className="AddProjectForm-update">
            <h2 className="AddProjectForm-h2">Add Project</h2>
            <form>
                <label className="AddProjectForm-lable">Project Name</label>
                <input className="AddProjectForm-input"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
                <label className="AddProjectForm-lable">Status</label>
                <select className="AddProjectForm-select"
                value={completed}
                onChange={(e) => setCompleted(e.target.value)}
                required
                >
                <option value={false}>Onging</option>
                <option value={true}>Completed</option>

                </select>
                <label className="AddProjectForm-lable">ProjectType</label>
                <input className="AddProjectForm-input" placeholder="eg: Web Development"
                type="text" 
                value={projecttype}
                onChange={(e) => setProjecttype(e.target.value)}
                required
                />
                <label className="AddProjectForm-lable">TechStacks</label>
                <input className="AddProjectForm-input" placeholder="eg: html,css,javascript"
                type="text" 
                value={techstacks}
                onChange={(e) => setTechstacks(e.target.value)}
                required
                />
                <label className="AddProjectForm-lable">Project Description</label>
                <textarea className="AddProjectForm-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                ></textarea>
                <label className="AddProjectForm-lable">Github Link</label>
                <input className="AddProjectForm-input"
                type="text" 
                value={github_link}
                onChange={(e) => setGithub_link(e.target.value)}
                required
                />
                
                <button className="AddProjectForm-submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </>
  );
}
 
export default AddProjectForm;
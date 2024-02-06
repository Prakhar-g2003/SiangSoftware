import { useState } from "react";
import Navbar from './Navbar'
import './ProfileForm.css'
import { useLocation } from 'react-router-dom';

const ProfileForm = () => {
  const [phone_no, setPhone_no] = useState('');
  const [branch, setBranch] = useState('');
  const [course, setCourse] = useState('');
  const [yearofGrad, setYearofGrad] = useState('');
  const [github, setGithub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [instagram, setInstagram] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = ()=>{

  };

  return (
    <>  
        <Navbar></Navbar>
        <div className="ProfileForm-update">
            <h2 className="ProfileForm-h2">Edit Your Profile</h2>
            <form>
                {/* <label className="ProfileForm-lable">{userinfo}</label>
                <input className="ProfileForm-input"
                type="text" 
                required 
                value={phone_no}
                onChange={(e) => setPhone_no(e.target.value)}
                /> */}
                {/* <label className="ProfileForm-lable">Email</label>
                <input className="ProfileForm-input"
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                /> */}
                <label className="ProfileForm-lable">Phone Number</label>
                <input className="ProfileForm-input"
                type="text" 
                required 
                value={phone_no}
                onChange={(e) => setPhone_no(e.target.value)}
                />
                <label className="ProfileForm-lable">Branch</label>
                <select className="ProfileForm-select"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                >
                <option value="mario">Biosciences and Bioengineering</option>
                <option value="yoshi">Chemical Engineering</option>
                <option value="yoshi">Chemical Science and Technology</option>
                <option value="yoshi">Civil Engineering</option>
                <option value="yoshi">Computer Science & Engineering</option>
                <option value="yoshi">Data Science and Artificial Intelligence</option>
                <option value="yoshi">Electronics and Communication Engineering</option>
                <option value="yoshi">Electronics and Electrical Engineering</option>
                <option value="yoshi">Engineering Physics</option>
                <option value="yoshi">Humanities and Social Sciences</option>
                <option value="yoshi">Mathematics and Computing</option>
                <option value="yoshi">Mechanical Engineering</option>
                <option value="yoshi">Mathematics</option>


                </select>
                <label className="ProfileForm-lable">Courses</label>
                <select className="ProfileForm-select"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                >
                <option value="mario">B.Tech</option>
                <option value="yoshi">M.Tech</option>

                </select>
                <label className="ProfileForm-lable">Year of Graduation</label>
                <input className="ProfileForm-input"
                type="text" 
                required 
                value={yearofGrad}
                onChange={(e) => setYearofGrad(e.target.value)}
                />
                <label className="ProfileForm-lable">GitHub Profile</label>
                <input className="ProfileForm-input"
                type="text" 
                required 
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                />
                <label className="ProfileForm-lable">LinkedIn Profile</label>
                <input className="ProfileForm-input"
                type="text" 
                required 
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                />
                <label className="ProfileForm-lable">Instagram Profile</label>
                <input className="ProfileForm-input"
                type="text" 
                required 
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                />
                <label className="ProfileForm-lable">About Yourself</label>
                <textarea className="ProfileForm-textarea"
                required
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                ></textarea>
                <button className="ProfileForm-submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </>
  );
}
 
export default ProfileForm;
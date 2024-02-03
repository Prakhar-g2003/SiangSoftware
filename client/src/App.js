import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MsalProvider } from "@azure/msal-react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Home from "./Home";
import Login from "./Login";
import Callback from "./Callback";
import ProjectPage from './Pages/Projects/ProjectPage'
import CoursePage from './Pages/courses/CoursesPage';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import ProjectDisplay from "./Components/ProjectDisplay/ProjectDisplay";

const project = {
  Name: "Web development",
  Type: "Personal project",
  Images: ["imag1 link", "image2 link"],
  Description:
    "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
  TeckStack: ["html", "css", "java"],
  Status: 0,
  Reviews: ["good", "bad"],
  SkillsReq: ["django", "react"],
};
  let Courses=[{id:1,courseName:"C++ full course",from:"coding Ninja",link:"www.google.com",rating:4,online:true},
    {id:2,courseName:"Web dev full course",from:"coding Ninja",link:"www.google.com",rating:5,online:true},
    {id:3,courseName:"Web dev full cours",from:"coding Ninja",link:"www.google.com",rating:4.3,online:false} ]
function App() {
  const [projects, setProjects] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
      const allprojects = async() => {
          var response = await fetch("http://localhost:3001/api/projects", {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json'
              }
          }); 
          response = await response.json();
          setProjects(response);
      }
      allprojects();
  },[])
  React.useEffect(() => {
      const allcourses = async() => {
          var response = await fetch("http://localhost:3001/api/courses", {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json'
              }
          }); 
          response = await response.json();
          
          setCourses(response);
          console.log(response);
          // setProjects(response);
      }
      allcourses();
  },[])
  return (
    <React.Fragment>
      <AuthenticatedTemplate>
        <Router>
          <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<Callback />} />
            <Route path="/home" element={<Home />} />
            <Route exact path='/projects' element={<ProjectPage projects={projects}/>}></Route>
            <Route exact path='/courses' element={<CoursePage courses={courses}/>}></Route>
            <Route
              exact
              path="/ProjectDisplay"
              element={<ProjectDisplay project={project} />}
            ></Route>
            {/* <Route path="about" element={<About />} /> */}
          </Routes>
        </Router>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </React.Fragment>
      

  );
}

export default App;

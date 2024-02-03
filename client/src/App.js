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

let Projects=[{id:7,projectName:"Project 7",image:"https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['HTML','Javascript'],reviews:50,dateModified:new Date('2024-01-15'),projectType:"Web devlopment",collaboration:false,completed:true},

    {id:8,projectName:"Project 8",image:"https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['CSS','Javascript'],reviews:90,dateModified:new Date('2023-01-15'),projectType:"Game devlopment",collaboration:true,completed:false},

    {id:9,projectName:"Project 9",image:"https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['HTML','Javascript'],reviews:550,dateModified:new Date('2024-01-15'),projectType:"Block chain",collaboration:true,completed:false},

    {id:10,projectName:"Project 10",image:"https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['CSS','Javascript'],reviews:900,dateModified:new Date('2023-01-15'),projectType:"Block chain",collaboration:false,completed:true},
    {id:11,projectName:"Project 12",image:"https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['CSS','Javascript'],reviews:900,dateModified:new Date('2023-01-15'),projectType:"Aeromodelin",collaboration:true,completed:true},
    {id:10,projectName:"Project 10",image:"https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['CSS','Javascript'],reviews:900,dateModified:new Date('2023-01-15'),projectType:"Block chain",collaboration:false,completed:true},
    {id:10,projectName:"Project 10",image:"https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['CSS','Javascript'],reviews:900,dateModified:new Date('2023-01-15'),projectType:"Block chain",collaboration:false,completed:true},
    {id:10,projectName:"Project 10",image:"https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['CSS','Javascript'],reviews:900,dateModified:new Date('2023-01-15'),projectType:"Block chain",collaboration:false,completed:true}
   ];
  let Courses=[{id:1,courseName:"C++ full course",from:"coding Ninja",link:"www.google.com",rating:4,online:true,college:false},
    {id:2,courseName:"Web dev full course",from:"coding Ninja",link:"www.google.com",rating:5,online:true,college:false},
    {id:3,courseName:"Web dev full cours",from:"coding Ninja",link:"www.google.com",rating:4.3,online:false,college:true} ]
function App() {
  return (
    <React.Fragment>
      <AuthenticatedTemplate>
        <Router>
          <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<Callback />} />
            <Route path="/home" element={<Home projects = {Projects} />} />
            <Route exact path='/myprofile/projects' element={<ProjectPage projects={Projects}/>}></Route>
            <Route exact path='/myprofile/courses' element={<CoursePage courses={Courses}/>}></Route>
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
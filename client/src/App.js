import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MsalProvider } from "@azure/msal-react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Home from "./Home";
import ProfilePage from "./Components/ProfilePage/Profilepage";
import Login from "./Pages/landing/Login";
// import Login from "./Login";
import Callback from "./Callback";
import ProjectPage from "./Pages/Projects/ProjectPage";
import CoursePage from "./Pages/courses/CoursesPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import FinalAskHelperMain from "./Components/AskHelper/FinalAskHelper";
import ProjectDisplay from "./Components/ProjectDisplay/ProjectDisplay";
import ProfileForm from "./Components/ProfilePage/ProfileForm";
function App() {
  const user = {
    name: "Shobhit",
    branch: "Coumputer Science and Engineering",
    course: "Btech Engineering",
    yearofgrad: "2026",
    email: "shobhit25gupta@gmail.com",
    phone_no: "9873187481",
    linkedInprofile: "https://www.linkedin.com/in/shobhit-gupta25/",
    instaprofile: "https://www.instagram.com/shobyy.25/",
    githubprofile: "https://github.com/shobyy25",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris vel urna ultrices, ac congue lacus condimentum. Integer nec elit eu metus ullamcorper bibendum. Nullam ullamcorper, urna eget condimentum fermentum, elit felis ultricies orci, vitae malesuada nulla dui in lacus."
  }
  const [projects, setProjects] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    const allprojects = async () => {
      var response = await fetch("http://localhost:3001/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setProjects(response);
    };
    allprojects();
  }, []);
  React.useEffect(() => {
    const allcourses = async () => {
      var response = await fetch("http://localhost:3001/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();

      setCourses(response);
      console.log(response);
      // setProjects(response);
    };
    allcourses();
  }, []);
  return (
    <React.Fragment>
      <AuthenticatedTemplate>
        <Router>
          <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<Callback />} />
            <Route exact path='/myprofile' element={<ProfilePage courses={courses} projects={projects}/>}></Route>
            <Route path="/home" element={<Home projects ={projects}/>} />
            <Route exact path='/projects' element={<ProjectPage projects={projects}/>}></Route>
            <Route exact path='/courses' element={<CoursePage courses={courses}/>}></Route>
            <Route
              exact
              path="/ProjectDisplay"
              element={<ProjectDisplay />}
            ></Route>
            <Route exact path='/ProfileForm' element={<ProfileForm />}></Route>
            <Route path="/AskHelper" element={<FinalAskHelperMain />} />
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

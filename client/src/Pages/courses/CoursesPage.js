import CourseCard from "./courseCard"
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MainProfile from "../../Assets/MainProfile";
import './courses.css'

export default function CoursesPage({courses}){
  const [sortValue, setValue] = React.useState('');
  let [inputValue,setInputValue]=React.useState('');
  let [newCourse,setNewCourse]=React.useState(courses);
  let [inputCourses,SetinputCourses]=React.useState([]);
  let courseName=[];
   const Rendercourse=(Array.isArray(newCourse) && newCourse.length)? newCourse.map((course)=>
        <CourseCard 
          key={course.id} 
          course={course}
        />
    ): "";
  const handleChange = (event) => {
    setValue(event.target.value);
  };


  React.useEffect(()=>{

  if(sortValue==='Rating'){
    const sortedItems = [...newCourse].sort((a, b) => a.rating - b.rating);
    setNewCourse(sortedItems.reverse());
    
  }
  // if(sortValue==='duration'){
  //   const sortedItems = [...newProject].sort((a, b) => b.dateModified - a.dateModified);
  //   setNewProject(sortedItems);
  // }

},[sortValue]);
if(Array.isArray(courses) && courses.length){
  if(courses.length){
    courses.map((course)=>courseName.push(course.courseName));
    courseName=[...new Set(courseName)];
  }
}
 
  let handleSubmit=(e)=>{
    e.preventDefault();
     let arr=[];
     setValue('');  
    if(inputValue){

    if(Array.isArray(courses) && courses.length){
      courses.map((course)=>{
        if(course.courseName===inputValue){
          arr.push(course);
        
      }})
    }
    }
    console.log(arr);
    if(arr.length){
      setNewCourse(arr)
      SetinputCourses(arr);
    }
   
}
let filterProject1=()=>{
  if(inputCourses){
  let onlineCourses=inputCourses.filter((project)=>project.online===true);
  setNewCourse(onlineCourses);
  }
  if(!inputValue){
    let onlineCourses=courses.filter((project)=>project.online===true);
  setNewCourse(onlineCourses);
  }
  setValue('');
}
let filterProject2=()=>{
 if(inputCourses){
  let colcoursess=inputCourses.filter((project)=>project.college===true);
  setNewCourse(colcoursess);
  }
  if(!inputValue){
    let colcoursess=courses.filter((project)=>project.college===true);
  setNewCourse(colcoursess);
  }
  setValue('');
}


React.useEffect(()=>{
  setNewCourse(courses);
  SetinputCourses([]);
},[inputValue])
    
    return(
      // backgroundColor: "#F7F9FB",
      <div style={{height:"100vh",width:"100vw",borderTop:"1px solid rgba(0,0,0,0.5)"}}>
          <form className="Searchform" onSubmit={handleSubmit}>
            <Autocomplete
              disablePortal
              inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
              id="combo-box-demo"
              options={courseName}
              renderInput={(params) => (
                  <div className="courseSearch" ref={params.InputProps.ref}>
                    <input placeholder="Search Courses " type="text" {...params.inputProps} />
                    
            <button style={{fontSize:"1rem"}} className="searchButn"><SearchIcon></SearchIcon></button>
            
                  </div>
                )}
            />
            
            <div className="filtercourse">
          <button onClick={filterProject1}>Online Courses</button>
          <button onClick={filterProject2} >College Courses</button>
        
        </div>
          </form>
          
        
          <Box >
            <FormControl fullWidth sx={{backgroundColor:"white", maxWidth: 120 ,marginLeft:"5%",marginTop:"30px",borderRadius:"6px"}}>
              <InputLabel sx={{height:"20px"}} id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortValue}
                label="Sort By"
                onChange={handleChange}
              >
                <MenuItem value={"Rating"}>Rating</MenuItem>
              </Select>
            </FormControl>
            </Box>
        
        <div className="Allcourses">{Rendercourse}</div>
        
      </div>
    )
}



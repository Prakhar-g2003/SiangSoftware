import React, {useState, useEffect, lazy} from 'react';
import CoursesPage from "./CoursesPage";
import MainNavbar from '../../Assets/MainNavbar';

function FinalCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const allcourses = async () => {
        var response = await fetch("http://localhost:3001/api/courses", {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            }
        });
        response = await response.json();
        setCourses(response);
        // console.log(response);
        setLoading(false);
        // setProjects(response);
        };
        allcourses();
    }, []);

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
  return (
    <div>
        {console.log(courses)}
        {/* <MainNavbar /> */}
        <CoursesPage courses={courses}/>
    </div>
  );
}

export default FinalCourses;

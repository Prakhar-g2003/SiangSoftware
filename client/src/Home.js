import React, { useEffect } from "react";
import Navbar from "./Components/ProfilePage/Navbar";
import "./Home.css"
import ProjectSlider from "./Components/ProjectSlider/ProjectSlider";

function Home({projects}) {
    useEffect(() => {
        const getUserinfo = async() => {
            try{
                const token = localStorage.getItem("token");
                var response = await fetch("http://localhost:3001/api/user-info", {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }); 
                response = await response.json();
                console.log(response);
            } catch(error){
                console.log(error);
            }
        }
        getUserinfo();
    }, [])
    return (
        
        <div>
        <Navbar/>
        <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D" alt="Description of the image" />
        <div className="text">
            <h1 className="hone">Random Heading</h1>
        </div>
        <div className="para">
            <p className="pone">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        </div>
        
        <p>
            
            {localStorage.getItem("authToken")}
        </p>
        <ProjectSlider projects={projects}/>
        </div>
    );
    }

export default Home;
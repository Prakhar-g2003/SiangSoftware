import React, { useEffect } from "react";
import TopContributors from "./Components/TopContributors/TopContributors";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import "./Home.css"

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
        <div className="home_body">
            <TopContributors className = "TopContributors"></TopContributors>
            <Feed className = "feed" projects = {projects}/>
            <Sidebar className =  "sidebar"/>
        </div>
    );
    }

export default Home;
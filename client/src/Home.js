import React, { useEffect } from "react";
import Navbar from "./Components/ProfilePage/Navbar";

function Home() {
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
        
        <p>
            
            {localStorage.getItem("authToken")}
        </p>
        </div>
    );
    }

export default Home;
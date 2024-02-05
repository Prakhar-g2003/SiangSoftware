import React, { useEffect} from "react";
import TopContributors from "./Components/TopContributors/TopContributors";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import "./Home.css"

function Home({projects, user}) {
    return (
        <div className="home_body">
            {console.log(user)};
            <TopContributors className = "TopContributors"></TopContributors>
            <Feed className = "feed" projects = {projects}/>
            <Sidebar className =  "sidebar" user = {user}/>
        </div>
    );
    }

export default Home;
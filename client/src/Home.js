import React, { useEffect, useState } from "react";
import TopContributors from "./Components/TopContributors/TopContributors";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import "./Home.css";
import MainNavbar from "./Assets/MainNavbar";
import MainProfile from "./Assets/MainProfile";

function Home() {
  const [user, setUser] = useState();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserinfo = async () => {
      try {
        const token = localStorage.getItem("token");
        var response = await fetch("http://localhost:3001/api/user-info", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        response = await response.json();
        localStorage.setItem("user_id", response.id);

        var response2 = await fetch("http://localhost:3001/api/fullinfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: localStorage.getItem("user_id") }),
        });
        response2 = await response2.json();
        setUser(response2);
        var response3 = await fetch("http://localhost:3001/api/projects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        response3 = await response3.json();
        setProjects(response3);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUserinfo();
  }, []);
  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="home_body">
      {/* <MainNavbar /> */}
      <div class="home_body_mid">
        <TopContributors className="TopContributors"></TopContributors>
        <Feed projects={projects} user={user} />
        <MainProfile />
      </div>
    </div>
  );
}

export default Home;

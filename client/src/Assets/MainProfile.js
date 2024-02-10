import { useEffect, useState } from "react";
import "./MainProfile.css";

const MainProfile = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async() => {
      var response2 = await fetch("http://localhost:3001/api/fullinfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: localStorage.getItem("user_id") }),
        });
        response2 = await response2.json();
        setUser(response2);
        setLoading(false);
    }
    getData();
  }, []);

  if(loading){
    return (
      <div>
        loading...
      </div>
    )
  }
  return (
    <div class="MainProfileOverlay" style={{cursor:"default",border:"1px solid rgba(0,0,0,0.4)"}}>
      <img
        class="MainProfileImage"
        src={user.profileImage}
      />
      <div class="ProfileDetails">
        <div class="ProfileName">{user.name}</div>
        <div class="ProfileName">Contributions: {user.contributions}</div>
      </div>
    </div>
  );
};

export default MainProfile;

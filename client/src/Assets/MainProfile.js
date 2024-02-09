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
    <div class="MainProfileOverlay" style={{cursor:"default"}}>
      <img
        class="MainProfileImage"
        src="https://images.unsplash.com/photo-1706806594968-06036c7c8064?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
      />
      <div class="ProfileDetails">
        <div class="ProfileName">{user.name}</div>
      </div>
    </div>
  );
};

export default MainProfile;

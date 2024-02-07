import "./MainProfile.css";

const MainProfile = () => {
  return (
    <div class="MainProfileOverlay">
      <img
        class="MainProfileImage"
        src="https://images.unsplash.com/photo-1706806594968-06036c7c8064?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
      />
      <div class="ProfileDetails">
        <div class="ProfileName">Siddharth Kashyap</div>
        <div class="ProfileDiscription">Web developer</div>
      </div>
    </div>
  );
};

export default MainProfile;

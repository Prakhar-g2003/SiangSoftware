import "./Navbar.css";
const MainNavbar = () => {
  return (
    <div class="NavBarOverlay">
      <div class="navbarRoutes">
        <img src="https://i.ibb.co/kX4wfCn/Coolab.png" class="navbarLogo" />

        <a href="/home" class="navBarIcons">
          <span class="material-symbols-outlined">home</span>
        </a>
        <a href="/projects" class="navBarIcons">
          <span class="material-symbols-outlined">code_blocks</span>
        </a>
        <a href="/courses" class="navBarIcons">
          <span class="material-symbols-outlined">school</span>
        </a>
        <a href="/AskHelper" class="navBarIcons">
          <span class="material-symbols-outlined">live_help</span>
        </a>
      </div>
      <a href="" class="navBarIcons">
        <span class="material-symbols-outlined">account_circle</span>
      </a>
    </div>
  );
};

export default MainNavbar;

import "./AskHelperMain.css";
import AskHelp from "./components/AskHelp";
import DoubtCard from "./components/DoubtCard";
import MainProfile from "../../Assets/MainProfile";
import MainNavbar from "../../Assets/MainNavbar";

const AskHelperMain = (props) => {
  return (
    <div class="askHelperLayout">
<<<<<<< HEAD
      {/* <MainNavbar /> */}
=======
      <MainNavbar />
>>>>>>> 96c1a1d65d77ce1c5dce66ff1c7efb61fa5a3ece
      <div class="overlayHelper">
        <div class="askHelpMain">
          <AskHelp />
          <div class="doubtMain">
            {/* <DoubtCard />
            <DoubtCard />
            <DoubtCard />
            <DoubtCard /> */}

            {props.data.map((res) => (
              <DoubtCard reload={props.reload} prop={res} />
            ))}
          </div>
        </div>
        <MainProfile />
      </div>
    </div>
  );
};

export default AskHelperMain;

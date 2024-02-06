import "./AskHelperMain.css";
import AskHelp from "./components/AskHelp";
import DoubtCard from "./components/DoubtCard";
import MainProfile from "../../Assets/MainProfile";
import MainNavbar from "../../Assets/MainNavbar";

const AskHelperMain = (props) => {
  return (
    <div class="askHelperLayout">
      <MainNavbar />
      <div class="overlayHelper">
        <div class="askHelpMain">
          <AskHelp />
          <div class="doubtMain">
            {/* <DoubtCard />
            <DoubtCard />
            <DoubtCard />
            <DoubtCard /> */}

            {props.doubts.map((Doubt) => (
              <DoubtCard prop={Doubt} />
            ))}
          </div>
        </div>
        <MainProfile />
      </div>
    </div>
  );
};

export default AskHelperMain;

import "./AskHelp.css";
const AskHelp = () => {
  return (
    <div class="askHelpInputMain">
      <div class="newHelpTtile">NEW POST</div>
      <hr class="askHelpInputSeperate"></hr>

      <form class="askHelpInputForm">
        <input
          class="askHelpInputField"
          placeholder="What's on your mind?"
        ></input>
        <button class="askHelpInputButton">POST</button>
      </form>
    </div>
  );
};

export default AskHelp;

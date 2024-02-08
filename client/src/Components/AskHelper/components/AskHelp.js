import "./AskHelp.css";
import React, { useState } from "react";
const AskHelp = () => {
  const [questionText, setQuestionText] = useState("");

  const handleQuestionChange = (event) => {
    // event.preventDefault();
    setQuestionText(event.target.value);
  };

  const handleAddQuestion = async(e) => {
    e.preventDefault();
    if (questionText) {

      var response = await fetch('http://localhost:3001/api/add-ques', {
        method: 'POST', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ques_user:localStorage.getItem("user_id"), ques_info: questionText})
      });
      response = await response.json();
      console.log(response);
      setQuestionText("");
    }
  };
  return (
    <div class="askHelpInputMain">
      <div class="newHelpTtile">NEW POST</div>
      <hr class="askHelpInputSeperate"></hr>

      <form class="askHelpInputForm">
        <input
          class="askHelpInputField"
          value={questionText}
          onChange={handleQuestionChange}
          placeholder="What's on your mind?"
        ></input>
        <button class="askHelpInputButton" onClick={handleAddQuestion}>POST</button>
      </form>
    </div>
  );
};

export default AskHelp;

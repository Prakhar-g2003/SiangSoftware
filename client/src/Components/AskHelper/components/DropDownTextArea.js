import React, { useState } from "react";
import "./DropDownComment.css";

function CommentForm({data}) {
  const [commentText, setCommentText] = useState(""); // State to store comment text
  const [comments, setComments] = useState([]); // State to store added comments


  const handleCommentChange = (event) => {
    // event.preventDefault();
    setCommentText(event.target.value);
  };

  const handleAddComment = async(e) => {
    // e.preventDefault();
    if (commentText) {
      setComments([...comments, commentText]);

      var response = await fetch('http://localhost:3001/api/add-ans', {
        method: 'POST', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ans_user:localStorage.getItem("user_id"), ques_id: data.ques_id, comment: commentText})
      });
      response = await response.json();
      setCommentText("");
      console.log({ques_id: data.ques_id, comment: commentText});
    }
  }

  return (
    <div className="dropDownSubmit">
      <input
        type="text"
        value={commentText}
        onChange={handleCommentChange}
        placeholder="Enter your comment..."
        class="dropDownTextArea"
      />
      <button onClick={handleAddComment} class="dropDownTextAreaButton">
        Submit
      </button>
    </div>
  );
}

export default CommentForm;

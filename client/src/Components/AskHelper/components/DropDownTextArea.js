import React, { useState } from "react";
import "./DropDownComment.css";

function CommentForm() {
  const [commentText, setCommentText] = useState(""); // State to store comment text
  const [comments, setComments] = useState([]); // State to store added comments

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleAddComment = () => {
    if (commentText) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

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

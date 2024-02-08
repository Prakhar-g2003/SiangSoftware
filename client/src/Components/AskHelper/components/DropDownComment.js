import React, { useState } from "react";
import "./DropDownComment.css";
function CommentDropdown(props) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div id="comments-dropdown">
      {/* {console.log(props)} */}
      <button onClick={toggleComments} class="askHelperDropDown">
        {showComments ? "Less" : "More"}
      </button>
      <div className="commentdisplay">
        {showComments && (
          <ul class="askHelperAnswers">
            {props.comments.map((comment) => (
              <li class="askHelpBullets">{comment.ans_info}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CommentDropdown;

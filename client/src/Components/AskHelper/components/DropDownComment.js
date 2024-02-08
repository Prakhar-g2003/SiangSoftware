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
          <div class="askHelperAnswers">
            {props.comments.map((comment) => (
              <div className="askHelperCommentanscontainer">
                <img
                  class="doubtCardUserPhoto"
                  src="https://images.unsplash.com/photo-1706887577952-2c3237ba079e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="askHelperCommentContentcont">
                  <div className="askHelperCommentuser">Shashwat</div>
                  <div className="askHelperCommentCont">Lorem ipsum dolor sit amet consectetur adipis</div>
                </div>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentDropdown;

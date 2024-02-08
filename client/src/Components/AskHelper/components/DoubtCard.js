import { useEffect, useState } from "react";
import "./DoubtCard.css";
import CommentDropdown from "./DropDownComment";
import CommentForm from "./DropDownTextArea";
const DoubtCard = (props) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  console.log(props.prop.answers);
  useEffect(() => {
    const getInfo = async(req, res) => {
      try{
        var response = await fetch("http://localhost:3001/api/fullinfo", {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({user_id: props.prop.question.ques_user})
        })

        response = await response.json();
        setName(response.name);
        setLoading(false);
      } catch(error){
        console.log(error);
      }
    }
    getInfo();
  }, []);

  if(loading){
    return (
      <div>
        loading...
      </div>
    )
  }
  document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-comments-button");
    var commentsList = document.getElementById("comments-list");

    // Hide comments initially
    commentsList.style.display = "none";

    toggleButton.addEventListener("click", function () {
      if (commentsList.style.display === "none") {
        commentsList.style.display = "block";
        toggleButton.textContent = "Hide Comments";
      } else {
        commentsList.style.display = "none";
        toggleButton.textContent = "Show Comments";
      }
    });
  });

  return (
    <div class="doubtCardMain">
      <div class="doubtCardUser">
        <img
          class="doubtCardUserPhoto"
          src="https://images.unsplash.com/photo-1706887577952-2c3237ba079e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
        />
        <div class="doubtCardUserInfo">
          <div class="doubtCardUserName">{name}</div>
        </div>
      </div>
      <hr></hr>

      <div class="doubtCardPS">{props.prop.question.ques_info}</div>
      <hr class="doubtSeperate"></hr>

      <div className="doubtCommentSection">
        <CommentForm data={props.prop}/>

        <CommentDropdown comments={props.prop.answers} />
      </div>
    </div>
  );
};

export default DoubtCard;

import "./DoubtCard.css";

const DoubtCard = (props) => {
  return (
    <div class="doubtCardMain">
      <div class="doubtCardUser">
        <img
          class="doubtCardUserPhoto"
          src="https://images.unsplash.com/photo-1706887577952-2c3237ba079e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
        />
        <div class="doubtCardUserInfo">
          <div class="doubtCardUserName">{props.prop.username}</div>
          <div class="doubtCardUserType">-{props.prop.domain}</div>
        </div>
      </div>
      <hr></hr>

      <div class="doubtCardPS">{props.prop.discription}</div>
      <hr class="doubtSeperate"></hr>

      <ol class="askHelperAnswers">
        {props.prop.comments.map((comment) => (
          <li class="askHelpBullets">{comment}</li>
        ))}
      </ol>
      <hr class="doubtSeperate"></hr>
      <div class="doubtHelp">
        <button class="doubtUpvote">Comments</button>
        <button class="doubtAnswer">Submit</button>
      </div>
    </div>
  );
};

export default DoubtCard;

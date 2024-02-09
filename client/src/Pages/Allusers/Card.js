// import React from 'react';
import './alluser.css';
import { useNavigate } from 'react-router-dom';
function Card(user){
let navigate = useNavigate();
  function handleClick() {
    console.log("clicked " + user.id);
    navigate("/profile", { state: { user: user } });
  }
    return(
        <div className="UserhoverCard" style={{backgroundColor:"white",width:"250px",height:"290px",textAlign:"center",border:"1px solid rgba(0,0,0,0.3)",borderRadius:"5px"}} onClick={handleClick}>
            {console.log(user)}
            <img alt='robots' src={`https://robohash.org/${user.id}`} style={{marginLeft:"3rem",backgroundColor:"black",borderRadius:"50%",marginTop:"20px",marginLeft:"0",opacity:"0.98"}} width={150} height={150} />
            <div>
                <p className='UsernameFromCard'>{user.name}</p>
                <p >{user.branch}</p>
            </div>
        </div>
    );
}

export default Card
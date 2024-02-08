// import React from 'react';
import './alluser.css'
function Card(props){
    return(
        <div className="UserhoverCard" style={{backgroundColor:"white",width:"250px",height:"290px",textAlign:"center",border:"1px solid rgba(0,0,0,0.3)",borderRadius:"5px"}}>
            <img alt='robots' src={`https://robohash.org/${props.id}`} style={{marginLeft:"3rem",backgroundColor:"black",borderRadius:"50%",marginTop:"20px",marginLeft:"0",opacity:"0.98"}} width={150} height={150} />
            <div>
                <p className='UsernameFromCard'>{props.name}</p>
                <p >{props.branch}</p>
            </div>
        </div>
    );
}

export default Card
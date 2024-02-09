import React, { useEffect, useState } from 'react';
import "./ProjectAccordian.css";

function OneReview({revieww}) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    useEffect(() => {
        const getUserinfo = async(req, res) => {
        var response = await fetch("http://localhost:3001/api/fullinfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: revieww.ans_user }),
            });
            response = await response.json();
            setUser(response);
            setLoading(false);
        }

        getUserinfo();
    },[]);

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
  return (
<<<<<<< HEAD
    < div className="reviewDisplay">
        {console.log(review)}
        <div>
             <img
                className='review_image'
                src="https://images.unsplash.com/photo-1706887577952-2c3237ba079e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
            />
        </div>
            <div className="reviewAuthor">
                  <div className='review_name'>{user.name}</div>
                  <div className='review_review'>{review.ans_info}</div>
            </div> 
        
        
=======
    <div className="reviewDisplay">
        {console.log(revieww)}
        <div className="reviewAuthor">{user.name}</div> {/* Author label */}
        {revieww.ans_info}
>>>>>>> c957b2a73ae55d8f7237c8e5540c51e26d4482f6
    </div>
  );
}

export default OneReview;

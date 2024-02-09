import React, { useEffect, useState } from 'react';
import "./ProjectAccordian.css";

function OneReview({review}) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    useEffect(() => {
        const getUserinfo = async(req, res) => {
        var response = await fetch("http://localhost:3001/api/fullinfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: review.ans_user }),
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
    <div className="reviewDisplay">
        {console.log(review)}
        <div className="reviewAuthor">{user.name}</div> {/* Author label */}
        {review.ans_info}
    </div>
  );
}

export default OneReview;

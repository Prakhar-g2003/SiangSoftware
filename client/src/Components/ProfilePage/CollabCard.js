import React, { useEffect, useState } from 'react';
import './profilepage.css';

function CollabCard({ collab }) {
    const [sender, setSender] = useState('');
    const [proj, setProj] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getcollabs = async () => {
            var response = await fetch("http://localhost:3001/api/fullinfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({user_id: collab.sender_id}),
            });
            response = await response.json();
            setSender(response.name);

            var response2 = await fetch("http://localhost:3001/api/showproject", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id: collab.project_id}),
            });
            response2 = await response2.json();
            setProj(response2.name);
            setLoading(false);
        }

        getcollabs();
    }, []);
    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    return (
        <div className='collab-card'>
            <div className='collab-user'>{sender} | {proj}</div>
            <div classname='collab-desc'>{collab.info}</div>
            <div className='buttons'>
                <button class="collab-accept-button">Accept</button>
                <button class="collab-decline-button">Decline</button>
            </div>
            <hr></hr>
        </div>
    );
}

export default CollabCard;

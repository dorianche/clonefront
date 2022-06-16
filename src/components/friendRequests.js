import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import verifySession from "./verifySession"; 


function FriendRequests() { 

  const [requests , setRequests] = useState([]);

  const getFriendRequests = async () => {
    try {
        const response = await fetch('http://localhost:9000/requests', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
        
    }) 
    
    const data = await response.json(); 
    console.log(data); 
    setRequests(data); 
    return data;

  } catch (err) {
      console.log(err);
  }
} 

const acceptRequest = async (e) => {
  e.preventDefault(); 
  const body = {id: e.target.id}; 
  console.log(body);
  try {
    const response = await fetch('http://localhost:9000/requests', {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
    body: JSON.stringify(body)

    
}) 



} catch (err) {
  console.log(err);
}
}

useEffect(() => {
  getFriendRequests();
}, [])



  return (
    <div>
      <div>Friend Requests</div>
      <div>
          {requests.map(post => {
              return (
                  <div>
                      <div>{post.first_name} {post.last_name}</div>
                      <div>
                        <button onClick={acceptRequest} id={post._id}>Accept</button>
                        <button id={post._id}>Reject</button> 
                        </div>
                      
                      
                  </div>
              )
          })}
      </div>
    </div>
  )
  
}

export default FriendRequests; 
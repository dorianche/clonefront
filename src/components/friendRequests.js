import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import verifySession from "./verifySession"; 



function FriendRequests() { 

  const [requests , setRequests] = useState(['']); 
  const token = JSON.parse(localStorage.getItem('userSession')); 

  function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    ;
    console.log(values)
}

  

const acceptRequest = async (e) => {
  e.preventDefault(); 
  const body = 
  {
    id: e.target.id, 
    //userid: token.user._id
  }; 
  console.log(body);
  try {
    const responses = await fetch('http://localhost:9000/getrequests', {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
    body: JSON.stringify(body)

    
}) 


} catch (err) {
  console.log(err);
} 
window.location.reload()
} 

const getFriendRequests = async (body) => {
  const userbody = 
  {
    //id: e.target.id, 
    userid: token.user._id
  }; 
  try {
      const response = await fetch('https://pacific-escarpment-23355.herokuapp.com/requests', {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
      body: JSON.stringify(userbody)
      
  }) 
  console.log(JSON.parse(localStorage.getItem('userSession')).token)
  const data = await response.json(); 
  console.log(data); 
  console.log(token.user)
  allStorage(); 
  
  setRequests(data); 
  
  return data;

} catch (err) {
    console.log(err);
}
} 

useEffect(() => {
 
getFriendRequests(); 

}, [])



  return (
    <div className="requests">
      <div>Friend Requests</div>
      
          {requests.map(post => {
              return (
                  <div key='hello'>
                      <div>{post.first_name} {post.last_name}</div>
                      <div>
                        <button onClick={acceptRequest} id={post._id}>Accept</button>
                        <button id={post._id}>Reject</button> 
                        </div>
                      
                      
                  </div>
              )
          })}
      
    </div>
  )
  
}

export default FriendRequests; 
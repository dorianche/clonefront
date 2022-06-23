import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback, useParams } from "react"; 
import { useNavigate } from "react-router-dom";  
import verifySession from "./verifySession"; 

function SendRequest(props) {  

    const hello = JSON.parse(localStorage.getItem('userSession')); 
    const visitor = props.visitor; 
    console.log(props) 
    

const send = async (e) => {
        e.preventDefault(); 
        const body = {id: props.id}; 
        console.log(body);
        try {
            const targeturl = `https://pacific-escarpment-23355.herokuapp.com/users/${props.id}`
          const responses = await fetch(targeturl, {
          method: 'PUT',
          headers: {
              "Content-Type": "application/json",
              "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
          body: JSON.stringify(body)
      
          
      }) 
      
      
      
      } catch (err) {
        console.log(err);
      }
      window.location.reload();
      } 

      

  return (
    <div>
        { ((!visitor.friends.includes(hello.user._id)) && (!visitor.friend_requests.includes(hello.user._id))) &&
            <button className="sendbutton" onClick={send}> Send Friend Request </button>
        }
    </div>
  )
}

export default SendRequest
import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 


function Accept(props) {  

    const acceptRequest = async () => {
        
        const body = 
        {
          id: props.id, 
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
      console.log(props.id)
      } 


  return (
    <button className="acceptbut" onClick={acceptRequest}>Accept</button>
  )
}

export default Accept
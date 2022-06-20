import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 


function LikePost(props) {

    const hello = JSON.parse(localStorage.getItem('userSession'));
    
    //const {id} = useParams(); 
    

    const putLike = async (e) => {
        e.preventDefault(); 
        const body = 
        {
          user: hello.user,
          post: props.id
        }; 
        console.log(body);
        const likeurl = `http://localhost:9000/posts/${props.id}/like`
        try {
          const responses = await fetch(likeurl, {
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
  return (
    <div><button onClick={putLike} >Like</button></div>
  )
}

export default LikePost
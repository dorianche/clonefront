import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 

import result from '../components/img/result.svg' 
import resultlight from '../components/img/resultlight.svg'


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
        const likeurl = `https://pacific-escarpment-23355.herokuapp.com/posts/${props.id}/like`
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
    <div>
      {props.likes.includes(hello.user._id) 
       ? <div><button className='but' onClick={putLike} >{props.length} <img src={result} alt="" /></button></div> 
       : <div><button className='but' onClick={putLike} >{props.length} <img src={resultlight} alt="" /></button></div>
      }
    </div>
    
  )
}

export default LikePost
import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 


function DeletePost() { 
    const {id} = useParams();

    const clickDelete = async () => {

        console.log(id)
        
        try {
            const url = `http://localhost:9000/posts/${id}`
            console.log(url)
          const responses = await fetch(url, {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json",
              "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
    
          
      }) 
      
      
      } catch (err) {
        console.log(err);
      } 
      
      } 

  return (
    <div><button onClick={clickDelete}>Delete</button></div>
  )
  }

export default DeletePost
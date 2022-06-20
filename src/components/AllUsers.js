import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import beach from '../image/beach2.jpg'; 
import verifySession from "./verifySession"; 

function AllUsers() { 

    const [allUsers , setAllUsers] = useState([]);

    const getUs = async () => {
        try {
            const response = await fetch('http://localhost:9000/allusers', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
            
        }) 
        
        const data = await response.json(); 
        console.log(data); 
        setAllUsers(data); 
        return data;
    
      } catch (err) {
          console.log(err);
      }
    }  

    const sendRequest = async (e) => {
        e.preventDefault(); 
        const body = {id: e.target.id}; 
        console.log(body);
        try {
            const targeturl = `http://localhost:9000/users/${e.target.id}`
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
      } 



    useEffect(() => {
        getUs();
      }, [])


  return (
    <div>
        <div>AllUsers</div>
        <div>
        {allUsers.map(post => {
            return (
                <div>
                    <div>{post.first_name} {post.last_name}</div>
                    <div>{post.username}</div> 
                    <button id={post._id} onClick={sendRequest}>Send Friend Request</button>
                    
                </div>
            )
        })} 
        </div>
    </div>
  )
}

export default AllUsers
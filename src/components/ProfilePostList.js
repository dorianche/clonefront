import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import beach from '../image/beach2.jpg'; 
import verifySession from "./verifySession"; 





function ProfilePostList() {  

    const [list, setList] = useState([]);

    const getpostList = async () => {
        try {
            const response = await fetch('http://localhost:9000/profile', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
            
        }) 
        
        const data = await response.json(); 
        console.log(data); 
        setList(data); 
        return data;
    
      } catch (err) {
          console.log(err);
      }
    } 

    

    useEffect(() => {
        getpostList();
    }, [])


  return ( 
    <div>
        {list.map(post => {
            return (
                <div>
                    <div>{post.user.first_name} {post.user.last_name}</div>
                    <div>{post.timestamp}</div>
                    <div>{post.text}</div>
                    <div>{post.likes}</div>
                </div>
            )
        })}
    </div>
  )
}

export default ProfilePostList
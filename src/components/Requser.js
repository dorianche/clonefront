import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import beach from '../image/beach2.jpg'; 
import verifySession from "./verifySession"; 

function Requser() { 

    const [ruser , getRuser] = useState('');

    const getRequser = async () => {
        try {
            const response = await fetch('http://localhost:9000/own', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
            
        }) 
        
        const data = await response.json(); 
        console.log(data)
        console.log(JSON.parse(localStorage.getItem('userSession')).user)
        getRuser(data); 
        
        return data;
    
      } catch (err) {
          console.log(err);
      }
    }  
    getRequser();

    useEffect(() => {
        getRequser();
      }, [])


  return (
    <div>Requser</div>
  )
}

export default Requser
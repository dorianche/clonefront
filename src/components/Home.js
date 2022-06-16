import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import beach from '../image/beach2.jpg'; 
import verifySession from "./verifySession"; 
import Logout from "./Logout";


function Home() { 

    let navigate = useNavigate(); 

    useEffect(() => {
        if (verifySession()) {
            console.log('verify works')
        } else {
            navigate('/login')
        }
    }, [])

    


  return (
    <div>
        <div>Home</div> 
        <Logout/>
    </div> 

  )
}

export default Home
import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import beach from '../image/beach2.jpg'; 
import verifySession from "./verifySession"; 
import Logout from "./Logout"; 
import Timeline from "./Timeline"; 
import Postform from "./Postform"; 
import Navbar from "./Navbar"; 
import Friends from "./Friends";


function Home() { 

    let navigate = useNavigate(); 

    useEffect(() => {
        if (verifySession()) {
            console.log('verify works')
            console.log(JSON.parse(localStorage.getItem('userSession')).token)
        } else {
            navigate('/login')
        }
    }, [])

    


  return (
    <div>
        
        <Navbar />
         
        
        <div className="home">
        <div className="timelinemid">
            <Friends />
            <div class='timelinepostcont'>
                <Postform />
                <Timeline/>
            </div>
        </div>
    </div> 
    </div>

  )
}

export default Home
import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import verifySession from "./verifySession"; 
import Logout from "./Logout"; 
import ProfilePostList from "./ProfilePostList"; 
import FriendRequests from "./friendRequests";

function Profile() { 

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
        <div>Profile</div> 
        <ProfilePostList/>
        <FriendRequests/>
    </div>
  )
}

export default Profile
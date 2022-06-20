import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 
import UserPosts from "./UserPosts"; 
import SendRequest from "./SendRequest";

function UserDetail() { 

    const hello = JSON.parse(localStorage.getItem('userSession')); 
    const {id} = useParams();  
    const [ user , setUser] = useState({}); 

    const userrequest = async () => { 

        
        
        const bod = 
        {
          user: hello.user,
          
        }; 

        console.log(bod)
    
        try {
            const posturl = `http://localhost:9000/users/${id}` 
            const response = await fetch(posturl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
            //body: JSON.stringify(bod)
        }) 
        
        const data = await response.json(); 
       // console.log(data); 
        setUser(data); 
        
       // console.log(post)
        return data;
    
      } catch (err) {
          console.log(err);
          console.log('ssrres')
      }
    }  

    useEffect(() => {
        userrequest(); 
    }, [])
    
  return (
    <div> 
        { user?.first_name &&
            <div>
                <div> {user.first_name} {user.last_name} </div> 
                        <SendRequest visitor={user} id={id} />
                        <UserPosts id={id} />
            </div> }
    </div>
  )
}

export default UserDetail
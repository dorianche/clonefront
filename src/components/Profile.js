import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate , useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 
import Logout from "./Logout"; 
import ProfilePostList from "./ProfilePostList"; 
import FriendRequests from "./friendRequests"; 
import Postform from "./Postform"; 
import Navbar from "./Navbar"; 
import Friends from "./Friends";


function Profile() { 

    const hello = JSON.parse(localStorage.getItem('userSession')); 
      
    const [ user , setUser] = useState({});
    let navigate = useNavigate(); 

    const userrequest = async () => { 

        
        
        const bod = 
        {
          user: hello.user,
          
        }; 

        console.log(bod)
    
        try {
            const posturl = `http://localhost:9000/own` 
            const response = await fetch(posturl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
            //body: JSON.stringify(bod)
        }) 
        
        const data = await response.json(); 
        console.log(data); 
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

    useEffect(() => {
        if (verifySession()) {
            console.log('verify works')
        } else {
            navigate('/login')
        }
    }, []) 


    



  return (
    <div className='pagecont'>
        <Navbar />
         
        <div> 
        
            <div className='profilecont'>
                
                 
                     <div className="profileimg"><img src={user.picture} alt="" />
                     
                     <Link to='/update'>
                         <div class='changebutton'>CHANGE PROFILE PICTURE</div>
                     </Link>
                 </div>
                 <div class='profileinfo'>
                     <div class='profilename'> {user.first_name} {user.last_name} </div>
                     <div class='profiletext'>{user.username}</div>
                 </div>
                      
            </div> 
        <div className="midprofile">
            <Friends />
            <div class='profilepostcont'>
                <Postform />
                <ProfilePostList/>
            </div>
        </div>
        
    </div>
    </div> 
  )
}

export default Profile
import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import verifySession from "./verifySession"; 
import Logout from "./Logout";
import Requestblock from "./Requestblock";

function Navbar() { 

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
            const posturl = `https://pacific-escarpment-23355.herokuapp.com/own` 
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
            <div className="nav">
                <div className="logo"><span className="navwhite book material-symbols-outlined">import_contacts</span>  CloneBook</div>
                <div className="navList">
                    <Link to='/profile'>
                        <li><div className="imgcont"><img src={user.picture} alt="" /></div> </li>
                        
                    </Link>  
                    <Link to='/profile'>
                        <li><div className="list"> {user.first_name} {user.last_name} </div> </li>
                    </Link>
                    <div className="navicons">
                        <Link to='/'>
                            <span className="navbar material-symbols-outlined">home_app_logo</span>
                        </Link>
                        
                        <Link to={'/allusers'}><span className="navbar material-symbols-outlined">list</span></Link>
                        <Requestblock />
                        <Logout/> 
                    </div>
                </div>
                    
            </div> 
  )
}

export default Navbar
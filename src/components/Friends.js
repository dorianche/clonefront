import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import verifySession from "./verifySession"; 

function Friends() { 

    const [list, setList] = useState([]);

    const getpostList = async () => {
        try {
            const response = await fetch('https://pacific-escarpment-23355.herokuapp.com/friends', {
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
    <div class='friends'> 
        <div className="friendstitle">FRIENDS ({list.length}) </div>
    {list?.map(post => {
        return (
            <div className="friendinfo">
                
                <Link className="friendlink"  to={`/users/${post._id}`}>
                    <div className="friendimg"><img src={post.picture} alt="" /></div><div className="friendname">{post.first_name} {post.last_name}</div>
                </Link>
            </div>
        )
    })}
</div>
  )
}

export default Friends
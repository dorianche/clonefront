import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 
import DeletePost from "./DeletePost";
import LikePost from "./LikePost";
import Commentform from "./Commentform"; 
import Accept from "./Accept";

function RequestList(props) {  

    const token = JSON.parse(localStorage.getItem('userSession'));

    const [request , setRequest] = useState([]); 

     


    const friendrequest = async () => { 

        
        
        const bod = 
        {
            userid: token.user._id
        }; 

        console.log(bod)
    
        try {
            const posturl = `http://localhost:9000/requests` 
            const response = await fetch(posturl, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
            body: JSON.stringify(bod)
        }) 
        
        const data = await response.json(); 
        console.log(data); 
        setRequest(data); 
        
       // console.log(post)
        return data;
    
      } catch (err) {
          console.log(err);
          console.log('ssrres')
      }
    }  

    useEffect(() => {
        friendrequest(); 
    }, [])
    


  return (
    <div>
    {request?.map(post => {
        return (
            
            <div className="requestcard" key={post._id}>
                {post?.first_name &&
                     <div>
                         <div className="commentname"><img src={post.picture} alt="" /> {post.first_name} {post.last_name}</div>
                         <div><Accept id={post._id} /></div>
                     </div>
                }
               
                
                
                
            </div>
        )
    })} 
</div>
  )
}

export default RequestList
            
import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import beach from '../image/beach2.jpg'; 
import verifySession from "./verifySession"; 
import LikePost from "./LikePost"; 
import { format ,formatDistance, subDays } from 'date-fns'; 
import Commentform from "./Commentform"; 
import CommentList from "./CommentList"; 
import CommentButton from "./CommentButton";

function Timeline() {  

  const [isShown, setIsShown] = useState(false); 
  const [editIndex, setEditIndex]= useState(null); 

   const handleClick = event => {
     // 👇️ toggle shown state
     setIsShown(current => !current);
 
     // 👇️ or simply set it to true
     // setIsShown(true);
   }; 


  const [timeline , setTimeline] = useState([]); 
  

    const getTimeline = async () => {
        try {
            const response = await fetch('https://pacific-escarpment-23355.herokuapp.com/timeline', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
            
        }) 
        
        const data = await response.json(); 
        console.log(data); 
        setTimeline(data); 
        return data;
    
      } catch (err) {
          alert("Incorrect Email or Password");
      }
    }  

    useEffect(() => {
      getTimeline();
    }, []) 

    const gettoday = (date) => {
      const dato = format(new Date(date), "dd/MM/yyyy HH:mm:ss"); 
      return(dato); 
     
      
  }

  return (
    <div className="postlist">
        {timeline.map(post => {
            return (
              <div className="singlepost">
                    <Link to={`/users/${post.user._id}`}>
                        <div class='postname'><img src={post.user.picture} alt="" /> {post.user.first_name} {post.user.last_name}</div>
                    </Link> 
                    <div className="postdate">{gettoday(post.timestamp)}</div> 
                    <div className="posttext">{post.text}</div> 
                    <div><img src={post.image} alt="" /></div>
                    <div className="options">
                      <LikePost likes={post.likes} length={post.likes.length} id={post._id}/>
                      <CommentButton id={post._id} />
                    </div>
                </div>
            )
        })} 
    </div>
  )
}

export default Timeline
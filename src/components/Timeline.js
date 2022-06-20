import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import beach from '../image/beach2.jpg'; 
import verifySession from "./verifySession"; 
import LikePost from "./LikePost"; 
import Commentform from "./Commentform"; 
import CommentList from "./CommentList";

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
            const response = await fetch('http://localhost:9000/timeline', {
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
          console.log(err);
      }
    }  

    useEffect(() => {
      getTimeline();
    }, [])

  return (
    <div>
        {timeline.map(post => {
            return (
                <div>
                    <div>{post.user.first_name} {post.user.last_name}</div>
                    <div>{post.timestamp}</div>
                    <div>{post.text}</div>
                    <div>{post.likes.length}</div>
                    <LikePost id={post._id}/> 
                    <button onClick={() => setEditIndex(editIndex => editIndex === post._id ? null : post._id)}>Comment</button>
                    {editIndex ===post._id && (
                        <div>
                            <Commentform setEditIndex={setEditIndex} id={post._id}/>
                        </div>
                        )}
                    <CommentList id={post._id} />
                </div>
            )
        })} 
    </div>
  )
}

export default Timeline
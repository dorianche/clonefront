import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import beach from '../image/beach2.jpg'; 
import verifySession from "./verifySession"; 
import { format ,formatDistance, subDays } from 'date-fns';
import DeletePost from "./DeletePost";
import LikePost from "./LikePost"; 
import Commentform from "./Commentform"; 
import CommentList from "./CommentList"; 
import CommentButton from "./CommentButton"; 






function ProfilePostList() {  

    const [isShown, setIsShown] = useState(false); 
    const [editIndex, setEditIndex]= useState(null); 

   

    const [list, setList] = useState([]);

    const getpostList = async () => {
        try {
            const response = await fetch('http://localhost:9000/profile', {
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

    const gettoday = (date) => {
        const dato = format(new Date(date), "dd/MM/yyyy HH:mm:ss"); 
        return(dato); 
       
        
    }

    

    useEffect(() => {
        getpostList();
    }, [])


  return ( 
    <div className="postlist">
        {list.map(post => {
            return (
                <div className="singlepost">
                    
                    <Link to={`/users/${post.user._id}`}>
                        <div className='postname'><img src={post.user.picture} alt="" /> {post.user.first_name} {post.user.last_name}</div>
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

export default ProfilePostList
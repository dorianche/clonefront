import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback, useParams } from "react"; 
import { useNavigate } from "react-router-dom";  
import verifySession from "./verifySession"; 
import LikePost from "./LikePost"; 
import Commentform from "./Commentform"; 
import CommentList from "./CommentList"; 
import CommentButton from "./CommentButton"; 
import Navbar from "./Navbar"; 
import { format ,formatDistance, subDays } from 'date-fns'; 

function UserPosts(props) {  

    

    

    const [list, setList] = useState([]); 
    const [editIndex, setEditIndex]= useState(null);  

    const getpostList = async () => {
        try {
            const geturl = `http://localhost:9000/users/${props.id}/posts`
            const response = await fetch(geturl, {
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
    <div> 
        
        <div className="userblock">
            {list.map(post => {
                return (
                    <div className="singlepost">
                        
                        <div className='postname'><img src={post.user.picture} alt="" /> {post.user.first_name} {post.user.last_name}</div>
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
    </div>
  )
}

export default UserPosts
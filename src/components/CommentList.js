import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 
import DeletePost from "./DeletePost";
import LikePost from "./LikePost";
import Commentform from "./Commentform";

function CommentList(props) {  

    const hello = JSON.parse(localStorage.getItem('userSession'));

    const [comment , setComment] = useState([]); 

    

    const commentrequest = async () => { 

        const id = props.id; 
        
        const bod = 
        {
          user: hello.user,
          post: props.id
        }; 

        console.log(bod)
    
        try {
            const posturl = `http://localhost:9000/posts/${id}/comments` 
            const response = await fetch(posturl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
            //body: JSON.stringify(bod)
        }) 
        
        const data = await response.json(); 
       // console.log(data); 
        setComment(data); 
        
       // console.log(post)
        return data;
    
      } catch (err) {
          console.log(err);
          console.log('ssrres')
      }
    }  

    useEffect(() => {
        commentrequest(); 
    }, [])
    


  return (
    <div>
    {comment.map(post => {
        return (
            <div>
                <div>{post.user.first_name} {post.user.last_name}</div>
                <div>{post.timestamp}</div>
                <div>{post.text}</div>
                <div>{post.likes.length}</div>
                
            </div>
        )
    })} 
</div>
  )
}

export default CommentList
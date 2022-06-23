import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 
import DeletePost from "./DeletePost";
import LikePost from "./LikePost";
import Commentform from "./Commentform";
import CommentList from "./CommentList";
import CommentButton from "./CommentButton";





function PostDetail() { 
    const [post , setPost] = useState({}); 
    const [likes , setLikes] = useState(0);
    const token = JSON.parse(localStorage.getItem('userSession'));
    const {id} = useParams();
    
   // console.log(id);
    
   const [editIndex, setEditIndex]= useState(null);

   

    const postrequest = async () => {
        
        console.log(id)
    
        try {
            const posturl = `https://pacific-escarpment-23355.herokuapp.com/posts/${id}`
            const response = await fetch(posturl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
            
        }) 
        
        const data = await response.json(); 
       // console.log(data); 
        setPost(data); 
        
       // console.log(post)
        return data;
    
      } catch (err) {
          console.log(err);
          console.log('ssrres')
      }
    }  

    

    useEffect(() => {
        postrequest()
    }, [])

    console.log(post)


  return (
                <div>
                    {post?.user &&
                        <div>
                        <Link to={`/users/${post.user._id}`}>
                            <div>{post?.user.first_name} {post?.user.last_name}</div>
                        </Link>
                        <div>{post?.timestamp}</div>
                        <div>{post?.text}</div>
                        <div>{post.likes.length}</div>
                    <LikePost id={id}  /> 
                    
                    {post?.user._id === token.user._id &&
                    <DeletePost />
                    } 
                    <CommentButton id={post._id} />
                    
                    
                    </div>
                                }
                </div>
  )
}

export default PostDetail
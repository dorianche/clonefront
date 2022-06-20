import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback, useParams } from "react"; 
import { useNavigate } from "react-router-dom";  
import verifySession from "./verifySession"; 
import LikePost from "./LikePost"; 
import Commentform from "./Commentform"; 
import CommentList from "./CommentList";

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

    

    useEffect(() => {
        getpostList();
    }, [])


  return (
    <div>
        {list.map(post => {
            return (
                <div>
                    <div>{post.user.first_name} {post.user.last_name}</div>
                    <div>{post.timestamp}</div>
                    <div>{post.text}</div>
                    <div>{post.likes.length}</div> 
                    <LikePost id={post._id}/>  <button onClick={() => setEditIndex(editIndex => editIndex === post._id ? null : post._id)}>Comment</button>
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

export default UserPosts
import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 
import Commentform from "./Commentform"; 
import CommentList from "./CommentList"; 

function CommentButton(props) {  

    const hello = JSON.parse(localStorage.getItem('userSession'));

    const [comment , setComment] = useState([]); 

    const [editIndex, setEditIndex]= useState(null); 

    const commentrequest = async () => { 

        const id = props.id; 
        
        const bod = 
        {
          user: hello.user,
          post: props.id
        }; 

        console.log(bod)
    
        try {
            const posturl = `https://pacific-escarpment-23355.herokuapp.com/posts/${id}/comments` 
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
          
      }
    }  

    useEffect(() => {
        commentrequest(); 
    }, [])


  return (
    <div>
        <button className="commentbut" onClick={() => setEditIndex(editIndex => editIndex === props.id ? null : props.id)}>{comment.length} <span class="material-symbols-outlined">chat</span></button>
                        {editIndex ===props.id && (
                            <div className="commentblock">
                                <Commentform setEditIndex={setEditIndex} id={props.id}/> 
                                <CommentList id={props.id} />
                            </div>
                            )}
    </div>
  )
}

export default CommentButton
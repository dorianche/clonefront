import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 

function Commentform(props , setEditIndex) {  

    

   

    const [text, setText] = useState(''); 

    const createComment = async (body) => { 

        

        try {
            const response = await fetch('http://localhost:9000/comment', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token,
                },
                body: JSON.stringify(body)
            })
            const data = await response.json();
            
            
            return data;   
        } catch (err) {
            console.log(err);
        }
    } 

    const submitData = async (e) => {
        e.preventDefault();
        const bodys = {
            text, 
            user: JSON.parse(localStorage.getItem('userSession')).user._id, 
            post: props.id
        };
        await createComment(bodys);
        props.setEditIndex(''); 
        window.location.reload();
      }

  return (
    <div>
        <form action="" onSubmit={submitData}>
        <label htmlFor="text">Your Comment</label> 
          <input 
            type="textbox" 
            id="text" 
            name="text" 
            required={true}
            value={text} 
            minLength="1"
            onChange={e => setText(e.target.value)}
            
            /> 
        <input type="submit"   value='Create Comment' />
        
        </form>
    </div>
  )
}

export default Commentform
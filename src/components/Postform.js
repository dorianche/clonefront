import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import verifySession from "./verifySession"; 


function Postform() { 
    
    const [text, setText] = useState(''); 
    let navigate = useNavigate(); 

    const createPost = async (body) => {
        try {
            const response = await fetch('http://localhost:9000/posts', {
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
      const bodys = {text};
      await createPost(bodys);
      navigate('/profile'); 
    }


  return (
    <div>
        <form action="" onSubmit={submitData}>
        <label htmlFor="text">Your Post</label> 
          <input 
            type="textbox" 
            id="text" 
            name="text" 
            required={true}
            value={text}
            onChange={e => setText(e.target.value)}
            /> 
        <input type="submit" value='Create Post' />
        </form>
    </div>
  )
}

export default Postform
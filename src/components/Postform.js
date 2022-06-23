import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import verifySession from "./verifySession"; 


function Postform() { 
    
    const [text, setText] = useState(''); 
    const [image, setImage] = useState(''); 
    let navigate = useNavigate(); 

    const createPost = async (body) => {
        try {
            const response = await fetch('https://pacific-escarpment-23355.herokuapp.com/posts', {
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
      const bodys = {text, image};
      await createPost(bodys); 
      window.location.reload();
      navigate('/profile'); 
    }


  return (
    <div className="postform"> 
        <form className="formpost" action="" onSubmit={submitData}>
        <label className="yourpost" htmlFor="text">YOUR POST</label> 
          <input className="postinput" 
            
            type="textbox" 
            id="text" 
            name="text" 
            required={true}
            value={text}
            onChange={e => setText(e.target.value)}

            
            /> 
          <label className="yourpost" htmlFor="text">IMAGE URL</label> 
            <input className="imageinput"
            type="url" 
            id="image" 
            name="image" 
            value={image}
            onChange={e => setImage(e.target.value)}/>
        <input className="postbutton" type="submit" value='CREATE POST' />
        </form>
    </div>
  )
}

export default Postform
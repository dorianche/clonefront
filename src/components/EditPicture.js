import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate , useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 
import Navbar from "./Navbar";

function EditPicture() { 

    const [picture, setPicture] = useState(''); 
    const hello = JSON.parse(localStorage.getItem('userSession')); 
    let navigate = useNavigate(); 

    const createPost = async (body) => {
        try {
            const response = await fetch('https://pacific-escarpment-23355.herokuapp.com/profile', {
                method: 'PUT',
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
      const bodys = {picture,
    id: hello.user._id};
      await createPost(bodys);
      console.log(bodys)
      navigate('/profile'); 
    }


  return (
    <div> 
        <Navbar />
        <h2>Change your profile picture</h2> 
        <div>Paste the url of your desired profile picture here. </div>
        <form action="" onSubmit={submitData}>
        <label htmlFor="picture">Your Picture</label> 
          <input 
            type="url" 
            id="picture" 
            name="picture" 
            required={true}
            value={picture}
            placeholder='https://example.com/example.png'
            onChange={e => setPicture(e.target.value)}
            /> 
        <input type="submit" value='Change Picture' /> 
        </form>
        <Link to='/profile'>
            <div>Cancel</div>
        </Link>
    </div>
  )
}

export default EditPicture
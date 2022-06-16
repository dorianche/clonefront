import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import beach from '../image/beach2.jpg'

function Enter() { 

  const [first_name , setFirstname] = useState(''); 
  const [last_name , setLastname] = useState(''); 
  const [email , setEmail] = useState(''); 
  const [password , setPassword] = useState(''); 
  const [confirmPassword , setConfirmPassword] = useState(''); 

  

  const submitData = async (e) => {
    e.preventDefault(); 
    if (password === confirmPassword) {
      const body = {
        first_name: first_name,
        last_name: last_name , 
        username: email  , 
        password: password, 
        confirmPassword : confirmPassword,
      }; 
      
      await signUp(body); 
      
    }
  } 

  const signUp = async (body) => {
    try {
      const response = await fetch('http://localhost:9000/test' , {
        
        method: 'POST' , 
        headers: {"Content-Type": "application/json"} , 
        body : JSON.stringify(body)
      })
      console.log(body);
      const data = await response.json(); 
      console.log(data);
      return data;

    } catch (err) {
        console.log(err);
    }
  }

  return (
    
    <div className="container">
      <div className='picturecont'>
        <div className="background">
          
          <div className="banner">
            <div className="picturetext">Clonebook</div>
          </div>
        </div>
      </div> 
      <div className='signcont'>
        <div className='adtext'>Welcome to the most complete social media.</div>
        <div className='form'> 
        <form action="" onSubmit={submitData}>
          <label htmlFor="first_name">First Name</label> 
          <input 
            type="text" 
            id="first_name" 
            name="first_name" 
            value={first_name}
            onChange={e => setFirstname(e.target.value)}
            /> 

          <label htmlFor="last_name">Last Name</label> 
          <input 
            type="text" 
            id="last_name" 
            name="last_name"
            value={last_name}
            onChange={e => setLastname(e.target.value)}
            /> 

          <label htmlFor="email">Email</label> 
          <input 
            type="text" 
            id="username" 
            name="username"
            value={email}
            onChange={e => setEmail(e.target.value)}
            /> 

          <label htmlFor="password">Password</label> 
          <input 
            type="password" 
            id="password" 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            /> 

          <label htmlFor="confirmPassword">Confirm Password</label> 
          <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)} 
            />
          <input type="submit" value="Sign Up" /> 
        </form>
           
           
        </div> 
        Already have an account ? 
        <Link to='/login'>Login</Link>
      </div>
    </div>
    
  )
}

export default Enter
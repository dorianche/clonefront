import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom";

function Login() { 
  const [email , setEmail] = useState(''); 
  const [password , setPassword] = useState(''); 
  let navigate = useNavigate();

  const logIn = async (body) => {
    try {
        const response = await fetch('http://localhost:9000/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await response.json();
        const {user, token} = data;
        localStorage.setItem('userSession', JSON.stringify({user, token}))
        console.log(user); 
        console.log(token);
        return data;   
    } catch (err) {
        console.log(err);
    }
} 

const submitData = async (e) => {
  e.preventDefault();
  const body = {username: email, password};
  await logIn(body);
  navigate('/'); 
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
        <div className='adtext'>Log in to your Clonebook</div>
        <div className='form'> 
        <form action="" onSubmit={submitData}>
          
          <label htmlFor="email">Email</label> 
          <input 
            type="text" 
            id="username" 
            name="username" 
            required={true}
            value={email}
            onChange={e => setEmail(e.target.value)}
            /> 

          <label htmlFor="password">Password</label> 
          <input 
            type="password" 
            id="password" 
            required={true} 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            /> 

          
          <input type="submit" value="Login" /> 
        </form>
           
           
        </div> 
       
      </div>
    </div>
  )
}

export default Login
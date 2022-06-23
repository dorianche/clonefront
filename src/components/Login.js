import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate } from "react-router-dom";

function Login() { 
  const [email , setEmail] = useState(''); 
  const [password , setPassword] = useState(''); 
  let navigate = useNavigate();

  const logIn = async (body) => {
    try {
        const response = await fetch('https://pacific-escarpment-23355.herokuapp.com//login', {
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
      <div className="welcome">Welcome to CloneBook</div>
      
        <div className="formcontainer">
          <h2>LOG IN</h2>
          
          <form className="form" action="" onSubmit={submitData}>

            <input className="inputbox"
              
              id="username"
              name="username"
              value={email}
              required={true}
              placeholder='EMAIL'
              onChange={e => setEmail(e.target.value)}
              />
            
              
              <input className="inputbox"
                type="password"
                id="password"
                name="password"
                value={password}
                required={true}
                placeholder='PASSWORD'
                onChange={e => setPassword(e.target.value)}
                />
              
              
            
            <input className="submitbut" type="submit" value="LOG IN" />
          </form>
          
          
          
          Don't have an account ?
          <Link to='/signup'>SIGN UP</Link>
                </div>
        </div>
  )
}

export default Login
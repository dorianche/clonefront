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
      <div className="welcome">Welcome to CloneBook</div>
      
        <div className="formcontainer">
          <h2>SIGN UP</h2>
          
          <form className="form" action="" onSubmit={submitData}>
            <div className="namecont">
              
              <input className="inputbox"
                type="text"
                id="first_name"
                name="first_name"
                value={first_name}
                required={true} 
                placeholder='FIRST NAME'
                onChange={e => setFirstname(e.target.value)}
                />
              
              <input className="inputbox"
                type="text"
                id="last_name"
                name="last_name"
                value={last_name}
                required={true}
                placeholder='LAST NAME'
                onChange={e => setLastname(e.target.value)}
                />
            </div>
            
            <input className="inputbox"
              type="email"
              id="username"
              name="username"
              value={email}
              required={true}
              placeholder='EMAIL'
              onChange={e => setEmail(e.target.value)}
              />
            <div className='passcont'>
              
              <input className="inputbox"
                type="password"
                id="password"
                name="password"
                value={password}
                required={true}
                placeholder='PASSWORD'
                onChange={e => setPassword(e.target.value)}
                />
              
              <input className="inputbox"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                required={true} 
                placeholder='CONFIRM PASSWORD'
                onChange={e => setConfirmPassword(e.target.value)}
                />
            </div>
            <input className="submitbut" type="submit" value="SIGN UP" />
          </form>
          
          
          
          Already have an account ?
          <Link to='/login'>LOG IN</Link>
                </div>
        </div>
    
  )
}

export default Enter
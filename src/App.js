import React from 'react'; 
import {BrowserRouter as Router , Switch , Outlet, Route , Routes} from 'react-router-dom'; 
import './App.css'; 
import Enter from './components/Enter'; 
import Login from './components/Login'; 
import Home from './components/Home'; 
import Profile  from './components/Profile';


function App() {
  return (
    <Router> 
      
      
      <Routes> 
        <Route path='/test' element={<Enter/>} /> 
        <Route path='/login' element={<Login/>} /> 
        <Route path='/' element={<Home/>} /> 
        <Route path='/profile' element={<Profile/>} /> 
      
      </Routes>

    

    </Router>
  );
}

export default App;

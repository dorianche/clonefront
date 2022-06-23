import React from 'react'; 
import {BrowserRouter as Router , Switch , Outlet, Route , Routes} from 'react-router-dom'; 
import './App.css'; 
import Enter from './components/Enter'; 
import Login from './components/Login'; 
import Home from './components/Home'; 
import Profile  from './components/Profile'; 
import AllUsers from './components/AllUsers'; 
import Requser from './components/Requser'; 
import PostDetail from './components/PostDetail'; 
import UserDetail from './components/UserDetail'; 
import EditPicture from './components/EditPicture';


function App() {
  return (
    <Router> 
      
      
      <Routes> 
        <Route path='/signup' element={<Enter/>} /> 
        <Route path='/login' element={<Login/>} /> 
        <Route path='/' element={<Home/>} /> 
        <Route path='/profile' element={<Profile/>} /> 
        <Route path='/allusers' element={<AllUsers/>} /> 
        <Route path='/ruser' element={<Requser/>} /> 
        <Route path='/posts/:id' element={<PostDetail/>} /> 
        <Route path='/users/:id' element={<UserDetail/>} /> 
        <Route path='/update' element={<EditPicture/>} /> 
      </Routes>

    

    </Router>
  );
}

export default App;

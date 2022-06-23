import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 
import RequestList from "./RequestList";

function Requestblock() { 


    const token = JSON.parse(localStorage.getItem('userSession'));  
    const [req , setReq] = useState([]);  
    const [editIndex, setEditIndex]= useState(null);  

    const getrequest = async () => { 

        
        
        const bod = 
        {
          
          userid: token.user._id
        }; 

        console.log(bod)
    
        try {
            const posturl = `http://localhost:9000/requests` 
            const response = await fetch(posturl, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
            body: JSON.stringify(bod)
        }) 
        
        const data = await response.json(); 
       console.log(data); 
        setReq(data); 
        
       // console.log(post)
        return data;
    
      } catch (err) {
          console.log(err);
          
      }
    }  

    useEffect(() => {
        getrequest(); 
    }, [])

  return (
    <div>
      
        <button className="navbar requestbut" onClick={() => setEditIndex(editIndex => editIndex === token.user._id ? null : token.user._id)}> <span class="displayrequests material-symbols-outlined">group_add</span></button>
                        {editIndex ===token.user._id && (
                            <div className="requestblock">
                                 <div className='requesttitle'>FRIEND REQUESTS ({req.length})</div>
                                <RequestList id={token.user._id} />
                            </div>
                            )}
    </div>
  )
}

export default Requestblock
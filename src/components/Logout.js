import { useNavigate } from "react-router-dom"; 
import verifySession from "./verifySession";

const Logout = () => {
    
    let navigate = useNavigate(); 

    const clearData = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/login');
    }

    const LogOutButton = (verifySession()) ? <span onClick={clearData} className="navbar material-symbols-outlined">logout</span> : null;

    return (
        <div  id={'logout'}>{LogOutButton}</div>
    )
}

export default Logout;
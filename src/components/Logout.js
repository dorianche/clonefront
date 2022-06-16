import { useNavigate } from "react-router-dom"; 
import verifySession from "./verifySession";

const Logout = () => {
    
    let navigate = useNavigate(); 

    const clearData = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/login');
    }

    const LogOutButton = (verifySession()) ? <button onClick={clearData}>Log Out</button> : null;

    return (
        <div id={'logout'}>{LogOutButton}</div>
    )
}

export default Logout;
import React from "react";
import  {useNavigate} from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();
    
    return(
        <div className="Home Page">
            <h1>Welcome to the Homepage!</h1>
            <p>You are successfully logged in.</p>
            <button onClick={() => navigate("/")}>Logout</button>
        </div>
    );
};

export default Homepage;
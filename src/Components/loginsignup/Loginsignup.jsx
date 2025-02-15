import React, { useState } from "react";
import  {useNavigate} from "react-router-dom";
import "./Loginsignup.css";

import email_icon from "../assets/icons8-email-24.png";
import user_icon from "../assets/icons8-username-50.png";
import pw_icon from "../assets/icons8-password-30.png";


const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home"); // Redirect to homepage after login
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputtext">
        {action === "Signup" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Username" />
          </div>
        )}
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={pw_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action === "Login" && <div className="forgot-password"> <span>Forgot Password?</span> </div>}

      <div className="submit-container">
       {action === "Login" ? (
          <>
            <div className="submit" onClick={() => setAction("Signup")}>Go to Signup</div>
            <div className="submit" onClick={handleLogin}>Login</div>
          </>
          ) : (
          <>
            <div className="submit" onClick={() => setAction("Login")}>Go to Login</div>
            <div className="submit">Sign Up</div>
          </>
        )}
    </div>
    </div>
  );
};

export default LoginSignup;

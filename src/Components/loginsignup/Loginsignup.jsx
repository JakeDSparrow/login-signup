import React, { useState } from "react";
import "./Loginsignup.css";

import email_icon from "../assets/icons8-email-24.png";
import user_icon from "../assets/icons8-username-50.png";
import pw_icon from "../assets/icons8-password-30.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

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
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Signup")}
        >
          Sign Up
        </div>
        <div
          className={action === "Signup" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

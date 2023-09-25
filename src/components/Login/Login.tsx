import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import icon from "../../images/Union.png";
import left from "../../images/signin.png";
import hi from "../../images/lendsqr.png";

const Login: React.FC = () => {
  return (
    <div className="Login">
      <div className="t-left">
        <img src={icon} alt="" className="icon" />
        <img src={hi} alt="" className="topname" />
        <img src={left} alt="" className="left-img" />
      </div>
      <div className="t-right">
        <h1>Welcome!</h1>
        <span className="deets">Enter details to login</span>
        <input type="text" placeholder="Email" className="email" />
        <input type="password" placeholder="Password" className="password" />
        <p className="pass">Forgot Password?</p>
        <Link to="/Dashboard">
          <button>LOG IN</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

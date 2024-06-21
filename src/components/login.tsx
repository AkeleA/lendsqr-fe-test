import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const mailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validUsername = import.meta.env.VITE_USERNAME;
    const validPassword = import.meta.env.VITE_PASSWORD;

    if (email === validUsername && password === validPassword) {
      navigate("/Dashboard");
    } else {
      console.log("Invalid credentials");
      return false;
    }
  };
  return (
    <div className="container">
      <div className="login-box">
        <div className="header">
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={mailChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={passwordChange}
              placeholder="Password"
            />
          </div>
          <div className="form-actions">
            <a href="#">Forgot Password?</a>
            <button type="submit">LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

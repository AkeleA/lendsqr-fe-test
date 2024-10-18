import React, { useState } from "react";
import logo from "../../logo.svg";
import homeImage from "../../assets/homepage.svg";
import { useNavigate } from "react-router-dom";
import "./homepage.scss";

type Props = {};

const Homepage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const VALID_EMAIL = process.env.REACT_APP_EMAIL;
  const VALID_PASSWORD = process.env.REACT_APP_PASSWORD;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setError("");
      navigate("/dashboard");
      alert("Login successful!");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="home-page">
      <div className="left-side">
        <img src={logo} alt="logo" className="logo" />
        <img src={homeImage} alt="homepage" className="home-image" />
      </div>
      <div className="right-side">
        <form onSubmit={handleLogin}>
          <div className="home-heading">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <div className="home-input">
            <input
              type="text"
              placeholder="Email"
              value={email}
              className="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="home-links">
            <span>Forgot Password?</span>
            <button type="submit">LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Homepage;

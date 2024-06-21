import React from "react";
import logo from "../assets/Group.svg";
import "./css/home.scss";
import homeillustration from "../assets/pablo-sign-in1.svg";

// type Props = {};

const HomeImage = () => {
  return (
    <div className="homepagecontainer">
      <div className="logo">
        <img src={logo} alt="lendsqr logo" />
      </div>
      <div className="homebody">
        <img src={homeillustration} alt="home image" />
      </div>
    </div>
  );
};

export default HomeImage;

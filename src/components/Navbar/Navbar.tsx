import React from "react";
import "./Navbar.scss";
import icon from "../../images/lendsqr.png";
import nope from "../../images/Union.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import avi from "../../images/avatar.png";

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <div className="N-left">
        <img src={nope} alt="" className="name" />
        <img src={icon} alt="" className="icon" />
      </div>
      <div className="N-mid">
        <input
          type="text"
          placeholder="Search for anything"
          className="s-bar"
        />
        <button>
          <FontAwesomeIcon icon={faSearch} color="#000" />
        </button>
      </div>
      <div className="N-right">
        <span className="Docs">Docs</span>
        <FontAwesomeIcon icon={faBell} className="bell" />
        <div className="ident">
          <img src={avi} alt="" className="fine" />
        </div>
        <span className="Ade">Adedeji</span>
      </div>
    </div>
  );
};

export default Navbar;

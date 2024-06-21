import React from "react";
import "./css/navbar.scss";
import logo from "../assets/Group.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import avatar from "../assets/image 4.png";

interface NavbarProps {
  username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="#" className="navbar__logo">
          <img src={logo} alt="Lendsar" />
        </a>
        <div className="navbar__search">
          <div className="search-container">
            <input type="text" placeholder="Search for anything" />
            <button className="search-btn">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="navbar__right">
        <p>Docs</p>
        <CiBellOn className="bell-icon" />
        <div className="navbar__user">
          <div className="navbar__user-image">
            <img src={avatar} alt="User" />
          </div>
          <span className="navbar__user-name">{username}</span>
          <span className="navbar__user-dropdown">
            <IoMdArrowDropdown className="dropdown-icon" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

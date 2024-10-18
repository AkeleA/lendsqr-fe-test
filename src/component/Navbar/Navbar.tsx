import React from "react";
import Logo from "../../logo.svg";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Navbar.scss";
import avatar from "../../assets/avatar.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="dashboard-Top">
      <img src={Logo} alt="logo" className="dash-logo" />
      <div className="search-container">
        <input type="text" placeholder="Search for anything" />
        <button>
          <CiSearch className="" />
        </button>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="docs">Docs</li>
          <CiBellOn className="bell-icon" />
          <img src={avatar} alt="" className="navbar-avatar" />
          <li className="navbar-name">Adedeji</li>
        </ul>
        <IoMdArrowDropdown className="dropdown-icon" />
      </div>
    </div>
  );
};

export default Navbar;

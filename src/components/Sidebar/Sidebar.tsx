import React from "react";
import "./Sidebar.scss";
import Businesses from "../Business&Settings/other";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faHandshake,
  faHandHoldingDollar,
  faUserCheck,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";
import HouseTwoToneIcon from "@mui/icons-material/HouseTwoTone";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";

const Sidebar: React.FC = () => {
  return (
    <div className="Sidebar">
      <div className="S-org">
        <span>
          <BusinessCenterTwoToneIcon className="suitcase" />
          <span className="textin">Switch Organisation</span>
        </span>
        <span>
          <HouseTwoToneIcon className="house" />
          <span className="housing">Dashboard</span>
        </span>
      </div>
      <div className="customers">
        <h3 className="title">CUSTOMERS </h3>
        <div className="users">
          <PeopleOutlinedIcon className="people" />
          <span className="peepin">Users</span>
        </div>
        <div className="Guarantors">
          <GroupsOutlinedIcon className="g-people" />
          <span className="g-peepin">Guarantors</span>
        </div>
        <div className="Loans">
          <FontAwesomeIcon icon={faSackDollar} className="loaned" />
          <span className="loanin">Loans</span>
        </div>
        <div className="Model">
          <FontAwesomeIcon icon={faHandshake} className="modeled" />
          <span className="modelin">Decision Models</span>
        </div>
        <div className="Savings">
          <SavingsOutlinedIcon className="savined" />
          <span className="savin">Savings</span>
        </div>
        <div className="L-requests">
          <FontAwesomeIcon icon={faHandHoldingDollar} className="lrequested" />
          <span className="questin">Loan Requests</span>
        </div>
        <div className="Whitelist">
          <FontAwesomeIcon icon={faUserCheck} className="whitelisted" />
          <span className="wlistin">Whitelist</span>
        </div>
        <div className="Karma">
          <FontAwesomeIcon icon={faUserXmark} className="karma-ed" />
          <span className="karmin">Karma</span>
        </div>
        <div className="businesses">
          <h3 className="head">BUSINESSES</h3>
          <Businesses />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

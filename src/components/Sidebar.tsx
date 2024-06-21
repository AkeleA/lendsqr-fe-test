import React from "react";
import "./css/sidebar.scss";
import suitcase from "../assets/briefcase1.svg";
import house from "../assets/home1.svg";
import users from "../assets/user-friends1.svg";
import guarantors from "../assets/guarantors.svg";
import loans from "../assets/loans.svg";
import decisions from "../assets/handshake-regular.svg";
import piggy from "../assets/piggy-bank.svg";
import handing from "../assets/Lrequests.svg";
import usercheck from "../assets/user-check.svg";
import userfail from "../assets/user-fail.svg";
import briefcase from "../assets/briefcase2.svg";
import handheld2 from "../assets/Lrequests.svg";
import bank from "../assets/bank.svg";
import coins from "../assets/coins-solid.svg";
import transact from "../assets/icon.svg";
import services from "../assets/galaxy.svg";
import saccount from "../assets/user-cog.svg";
import settle from "../assets/scroll.svg";
import bar from "../assets/chart-bar.svg";
import pref from "../assets/preferences.svg";
import pricings from "../assets/pricings.svg";
import logs from "../assets/logs.svg";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img src={suitcase} alt="" />
        <h1 className="sidebar__title">Switch Organisation</h1>
      </div>
      <div className="sidebar__section__title">
        <img src={house} alt="house logo" className="sidebar__icon" />
        <span>Dashboard</span>
      </div>
      <div className="sidebar__section">
        <div className="sidebar__section__head">
          <h2>Customers</h2>
        </div>
        <div className="sidebar__item">
          <img src={users} alt="users icon" className="sidebar__icon" />
          <span>Users</span>
        </div>
        <div className="sidebar__item">
          <img src={guarantors} alt="users icon" className="sidebar__icon" />
          <span>Guarantors</span>
        </div>
        <div className="sidebar__item">
          <img src={loans} alt="users icon" className="sidebar__icon" />
          <span>Loans</span>
        </div>
        <div className="sidebar__item">
          <img src={decisions} alt="users icon" className="sidebar__icon" />
          <span>Decision Models</span>
        </div>
        <div className="sidebar__item">
          <img src={piggy} alt="users icon" className="sidebar__icon" />
          <span>Savings</span>
        </div>
        <div className="sidebar__item">
          <img src={handing} alt="users icon" className="sidebar__icon" />
          <span>Loan Requests</span>
        </div>
        <div className="sidebar__item">
          <img src={usercheck} alt="users icon" className="sidebar__icon" />
          <span>Whitelist</span>
        </div>
        <div className="sidebar__item">
          <img src={userfail} alt="users icon" className="sidebar__icon" />
          <span>Karma</span>
        </div>
      </div>
      <div className="sidebar__section">
        <div className="sidebar__section__head">
          <h2>Businesses</h2>
        </div>
        <div className="sidebar__item">
          <img src={briefcase} alt="users icon" className="sidebar__icon" />
          <span>Organization</span>
        </div>
        <div className="sidebar__item">
          <img src={handheld2} alt="users icon" className="sidebar__icon" />
          <span>Loan Products</span>
        </div>
        <div className="sidebar__item">
          <img src={bank} alt="users icon" className="sidebar__icon" />
          <span>Savings Products</span>
        </div>
        <div className="sidebar__item">
          <img src={coins} alt="users icon" className="sidebar__icon" />
          <span>Fees and Charges</span>
        </div>
        <div className="sidebar__item">
          <img src={transact} alt="users icon" className="sidebar__icon" />
          <span>Transactions</span>
        </div>
        <div className="sidebar__item">
          <img src={services} alt="users icon" className="sidebar__icon" />
          <span>Services</span>
        </div>
        <div className="sidebar__item">
          <img src={saccount} alt="users icon" className="sidebar__icon" />
          <span>Service Account</span>
        </div>
        <div className="sidebar__item">
          <img src={settle} alt="users icon" className="sidebar__icon" />
          <span>Settlements</span>
        </div>
        <div className="sidebar__item">
          <img src={bar} alt="users icon" className="sidebar__icon" />
          <span>Reports</span>
        </div>
      </div>
      <div className="sidebar__section">
        <div className="sidebar__section__head">
          <h2>Settings</h2>
        </div>
        <div className="sidebar__item">
          <img src={pref} alt="users icon" className="sidebar__icon" />
          <span>Preferences</span>
        </div>
        <div className="sidebar__item">
          <img src={pricings} alt="users icon" className="sidebar__icon" />
          <span>Fees and Pricing</span>
        </div>
        <div className="sidebar__item">
          <img src={logs} alt="users icon" className="sidebar__icon" />
          <span>Audit Logs</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

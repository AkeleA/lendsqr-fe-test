import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.scss";
import RenderedApi from "../Data/renderedApi";
import UserTop from "../Users/users";

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard">
      <div className="d-navbar">
        <Navbar />
      </div>
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div>
        <UserTop />
      </div>
      <div className="rApi">
        <RenderedApi />
      </div>
    </div>
  );
};

export default Dashboard;

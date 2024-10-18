import React from "react";
import "./dashboard.scss";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="main-dash">
      <Navbar />
      <div className="main-top">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

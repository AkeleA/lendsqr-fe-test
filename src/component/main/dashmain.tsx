import React from "react";
import "./dashmain.scss";
import StatsCard from "../card/StatsCard";
import UserTable from "../table/Table";

const Dashmain = () => {
  return (
    <div className="main-container">
      <h1>Users</h1>
      <StatsCard />
      <UserTable />
    </div>
  );
};

export default Dashmain;

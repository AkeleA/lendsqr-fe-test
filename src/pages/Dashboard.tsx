import "./css/dashboard.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

// type Props = {};

const Dashboard = () => {
  return (
    <div className="Dash-container">
      <div className="Dash-header">
        <Navbar username="Adedeji" />
      </div>
      <div className="Dash-body">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

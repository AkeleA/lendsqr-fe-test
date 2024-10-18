import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Dashboard from "./pages/DashboardLayout/Dashboard";
import Dashmain from "./component/main/dashmain";
import UserDetails from "./component/userdetails/UserDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashmain />} />
          <Route path="user/:user.id" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

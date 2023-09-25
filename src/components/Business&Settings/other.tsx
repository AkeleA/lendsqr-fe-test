import React from "react";
import "./other.scss";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

const Businesses: React.FC = () => {
  return (
    <div className="other">
      <div className="underbusiness">
        <BusinessCenterTwoToneIcon className="suits" />
        <span className="sp-1">Organisation</span>
        <FontAwesomeIcon icon={faHandHoldingDollar} className="products" />
        <span className="sp-2">Loan Products</span>
        <span className="sp-3">Savings Products</span>
        <span className="sp-4">Fees and Charges</span>
        <span className="sp-5">Transactions</span>
        <span className="sp-6">Services</span>
        <span className="sp-7">Service Account</span>
        <span className="sp-8">Settlement</span>
        <span className="sp-9">Reports</span>
      </div>
      <div className="settings">
        <h3 className="sett">SETTINGS</h3>
        <span className="ss-1">Preferences</span>
        <span className="ss-2">Fees and Pricing</span>
        <span className="ss-3">Audit Logs</span>
      </div>
    </div>
  );
};

export default Businesses;

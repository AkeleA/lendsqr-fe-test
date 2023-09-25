import React from "react";
import "./other.scss";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faPiggyBank,
  faCoins,
  faMoneyBillTransfer,
  faArrowsSpin,
  faChartColumn,
  faSliders,
  faCircleXmark,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";

const Businesses: React.FC = () => {
  return (
    <div className="other">
      <div className="underbusiness">
        <BusinessCenterTwoToneIcon className="suits" />
        <span className="sp-1">Organisation</span>
        <FontAwesomeIcon icon={faHandHoldingDollar} className="products" />
        <span className="sp-2">Loan Products</span>
        <FontAwesomeIcon icon={faPiggyBank} className="savducts" />
        <span className="sp-3">Savings Products</span>
        <FontAwesomeIcon icon={faCoins} className="fees" />
        <span className="sp-4">Fees and Charges</span>
        <FontAwesomeIcon icon={faMoneyBillTransfer} className="transact" />
        <span className="sp-5">Transactions</span>
        <FontAwesomeIcon icon={faArrowsSpin} className="services" />
        <span className="sp-6">Services</span>
        <FontAwesomeIcon icon={faArrowsSpin} className="serviceact" />
        <span className="sp-7">Service Account</span>
        <FontAwesomeIcon icon={faServicestack} className="settlement" />
        <span className="sp-8">Settlement</span>
        <FontAwesomeIcon icon={faChartColumn} className="reports" />
        <span className="sp-9">Reports</span>
      </div>
      <div className="settings">
        <h3 className="sett">SETTINGS</h3>
        <FontAwesomeIcon icon={faSliders} className="seset" />
        <span className="ss-1">Preferences</span>
        <FontAwesomeIcon icon={faCircleXmark} className="feeprice" />
        <span className="ss-2">Fees and Pricing</span>
        <FontAwesomeIcon icon={faClipboardList} className="audLogs" />
        <span className="ss-3">Audit Logs</span>
      </div>
    </div>
  );
};

export default Businesses;

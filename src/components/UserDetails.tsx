import React from "react";
import "./css/userdetails.scss";
import { Link } from "react-router-dom";
import avi from "../assets/avatar.svg";
import { useLocation } from "react-router-dom";
import divide from "../assets/Line1.svg";

interface UserData {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
  personalInformation: {
    emailAddress: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
    bankAccountNumber: string;
    bankName: string;
  };
  educationAndEmployment: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: {
      min: number;
      max: number;
    };
    accountType: string;
    loanRepayment: null | number;
    savingsBalance: number;
    tier: number;
  };
  socials: {
    twitter: string;
    instagram: string;
  };
  guarantors: {
    id: string;
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
  }[];
}

const UserDetails: React.FC = () => {
  const location = useLocation();
  const user: UserData = location.state;

  if (!user) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <div className="user-details">
        <div className="user-details__header">
          <Link to="/dashboard">
            <button className="back-link">
              <span>&larr; Back to Users</span>
            </button>
          </Link>
          <div className="user-details__actions">
            <h1>User Details</h1>
            <div>
              <button className="blacklist-btn">BLACKLIST USER</button>
              <button className="activate-btn">ACTIVATE USER</button>
            </div>
          </div>
        </div>
        <div className="user-details__content">
          <div className="content1">
            <div className="user-details__avatar">
              <img src={avi} alt="User Avatar" />
            </div>
            <div className="user-details__info">
              <h2>{user.username}</h2>
              <p>{user.organization}</p>
            </div>
            <img src={divide} alt="" className="divide" />
            <div className="user-details__tier">
              <span className="tier-label">User's Tier</span>
              <span className="tier-value">
                {user.educationAndEmployment.tier}
              </span>
            </div>
            <img src={divide} alt="" className="divide" />
            <div className="user-details__balance">
              <span className="balance-label">₦</span>
              <span className="balance-value">
                {user.educationAndEmployment.loanRepayment}
              </span>
            </div>
          </div>
          <div className="user-details__navigation">
            <button className="nav-btn active">General Details</button>
            <button className="nav-btn">Documents</button>
            <button className="nav-btn">Bank Details</button>
            <button className="nav-btn">Loans</button>
            <button className="nav-btn">Savings</button>
            <button className="nav-btn">App and System</button>
          </div>
        </div>
      </div>
      <div className="general__info">
        <h2>Personal Information</h2>
        <div className="personal-info">
          <div>
            <span className="label">FULL NAME</span>
            <span className="value">{user.username}</span>
          </div>
          <div>
            <span className="label">PHONE NUMBER</span>
            <span className="value">{user.phoneNumber}</span>
          </div>
          <div>
            <span className="label">EMAIL ADDRESS</span>
            <span className="value">
              {user.personalInformation.emailAddress}
            </span>
          </div>
          <div>
            <span className="label">BVN</span>
            <span className="value">{user.phoneNumber}</span>
          </div>
          <div>
            <span className="label">GENDER</span>
            <span className="value">{user.personalInformation.gender}</span>
          </div>
          <div>
            <span className="label">MARITAL STATUS</span>
            <span className="value">
              {user.personalInformation.maritalStatus}
            </span>
          </div>
          <div>
            <span className="label">CHILDREN</span>
            <span className="value">{user.personalInformation.children}</span>
          </div>
          <div>
            <span className="label">TYPE OF RESIDENCE</span>
            <span className="value">
              {user.personalInformation.typeOfResidence}
            </span>
          </div>
        </div>

        <h2>Education and Employment</h2>
        <div className="education-employment">
          <div>
            <span className="label">LEVEL OF EDUCATION</span>
            <span className="value">
              {user.educationAndEmployment.levelOfEducation}
            </span>
          </div>
          <div>
            <span className="label">EMPLOYMENT STATUS</span>
            <span className="value">
              {user.educationAndEmployment.employmentStatus}
            </span>
          </div>
          <div>
            <span className="label">SECTOR OF EMPLOYMENT</span>
            <span className="value">
              {user.educationAndEmployment.sectorOfEmployment}
            </span>
          </div>
          <div>
            <span className="label">DURATION OF EMPLOYMENT</span>
            <span className="value">
              {user.educationAndEmployment.durationOfEmployment}
            </span>
          </div>
          <div>
            <span className="label">OFFICE EMAIL</span>
            <span className="value">
              {user.educationAndEmployment.officeEmail}
            </span>
          </div>
          <div>
            <span className="label">MONTHLY INCOME</span>
            <span className="value">
              ₦{user.educationAndEmployment.monthlyIncome.min.toLocaleString()}{" "}
              - ₦
              {user.educationAndEmployment.monthlyIncome.max.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="label">LOAN REPAYMENT</span>
            <span className="value">
              {user.educationAndEmployment.loanRepayment
                ? `₦${user.educationAndEmployment.loanRepayment.toLocaleString()}`
                : "N/A"}
            </span>
          </div>
        </div>

        <h2>Socials</h2>
        <div className="socials">
          <div>
            <span className="label">TWITTER</span>
            <span className="value">{user.socials.twitter}</span>
          </div>
          <div>
            <span className="label">INSTAGRAM</span>
            <span className="value">{user.socials.instagram}</span>
          </div>
        </div>
        <h2>Guarantor</h2>
        <div className="guarantor">
          {user.guarantors.map((guarantor) => (
            <div key={guarantor.id} className="guarantor-item">
              <div>
                <span className="label">FULL NAME</span>
                <span className="value">{guarantor.fullName}</span>
              </div>
              <div>
                <span className="label">PHONE NUMBER</span>
                <span className="value">{guarantor.phoneNumber}</span>
              </div>
              <div>
                <span className="label">EMAIL ADDRESS</span>
                <span className="value">{guarantor.emailAddress}</span>
              </div>
              <div>
                <span className="label">RELATIONSHIP</span>
                <span className="value">{guarantor.relationship}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

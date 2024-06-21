import React from "react";
import "./UserDetails.scss";

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
    facebook: string;
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

interface UserDetailsProps {
  userData: UserData;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userData }) => {
  const { personalInformation, educationAndEmployment, socials, guarantors } =
    userData;

  return (
    <div className="general__info">
      <h2>Personal Information</h2>
      <div className="personal-info">
        <div>
          <span className="label">FULL NAME</span>
          <span className="value">{userData.username}</span>
        </div>
        <div>
          <span className="label">PHONE NUMBER</span>
          <span className="value">{userData.phoneNumber}</span>
        </div>
        <div>
          <span className="label">EMAIL ADDRESS</span>
          <span className="value">{personalInformation.emailAddress}</span>
        </div>
        <div>
          <span className="label">BVN</span>
          <span className="value">{userData.phoneNumber}</span>
        </div>
        <div>
          <span className="label">GENDER</span>
          <span className="value">{personalInformation.gender}</span>
        </div>
        <div>
          <span className="label">MARITAL STATUS</span>
          <span className="value">{personalInformation.maritalStatus}</span>
        </div>
        <div>
          <span className="label">CHILDREN</span>
          <span className="value">{personalInformation.children}</span>
        </div>
        <div>
          <span className="label">TYPE OF RESIDENCE</span>
          <span className="value">{personalInformation.typeOfResidence}</span>
        </div>
      </div>

      <h2>Education and Employment</h2>
      <div className="education-employment">
        <div>
          <span className="label">LEVEL OF EDUCATION</span>
          <span className="value">
            {educationAndEmployment.levelOfEducation}
          </span>
        </div>
        <div>
          <span className="label">EMPLOYMENT STATUS</span>
          <span className="value">
            {educationAndEmployment.employmentStatus}
          </span>
        </div>
        <div>
          <span className="label">SECTOR OF EMPLOYMENT</span>
          <span className="value">
            {educationAndEmployment.sectorOfEmployment}
          </span>
        </div>
        <div>
          <span className="label">DURATION OF EMPLOYMENT</span>
          <span className="value">
            {educationAndEmployment.durationOfEmployment}
          </span>
        </div>
        <div>
          <span className="label">OFFICE EMAIL</span>
          <span className="value">{educationAndEmployment.officeEmail}</span>
        </div>
        <div>
          <span className="label">MONTHLY INCOME</span>
          <span className="value">
            ₦{educationAndEmployment.monthlyIncome.min.toLocaleString()} - ₦
            {educationAndEmployment.monthlyIncome.max.toLocaleString()}
          </span>
        </div>
        <div>
          <span className="label">LOAN REPAYMENT</span>
          <span className="value">
            {educationAndEmployment.loanRepayment
              ? `₦${educationAndEmployment.loanRepayment.toLocaleString()}`
              : "N/A"}
          </span>
        </div>
      </div>

      <h2>Socials</h2>
      <div className="socials">
        <div>
          <span className="label">TWITTER</span>
          <span className="value">{socials.twitter}</span>
        </div>
        <div>
          <span className="label">FACEBOOK</span>
          <span className="value">{socials.facebook}</span>
        </div>
        <div>
          <span className="label">INSTAGRAM</span>
          <span className="value">{socials.instagram}</span>
        </div>
      </div>

      <h2>Guarantor</h2>
      <div className="guarantor">
        {guarantors.map((guarantor) => (
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
  );
};

export default UserDetails;

import React from "react";
import { useParams } from "react-router-dom";

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const user = {
    fullName: "Grace Effiom",
    phoneNumber: "07067080922",
    email: "grace@gmail.com",
  };

  return (
    <div className="user-details">
      <h1>{user.fullName}</h1>
      <p>Phone: {user.phoneNumber}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;

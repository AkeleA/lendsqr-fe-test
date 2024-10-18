import React from "react";
import "./OptionsMenu.scss";
import { useNavigate } from "react-router-dom";

interface OptionsMenuProps {
  userId: string;
  onClose: () => void;
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({ userId, onClose }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`user/${userId}`);
    onClose();
  };

  return (
    <div className="options-menu">
      <ul>
        <li onClick={handleViewDetails}>
          <i className="icon-eye" />
          View Details
        </li>
        <li>
          <i className="icon-blacklist" />
          Blacklist User
        </li>
        <li>
          <i className="icon-activate" />
          Activate Blacklist
        </li>
      </ul>
    </div>
  );
};

export default OptionsMenu;

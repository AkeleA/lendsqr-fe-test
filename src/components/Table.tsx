import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/DashbarContents.scss";
import { useNavigate } from "react-router-dom";
import dashusers from "../assets/dash-users.svg";
import active from "../assets/active-users.svg";
import loan from "../assets/loan-users.svg";
import savings from "../assets/users-savings.svg";
import filter from "../assets/filter-results-button.svg";

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

interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  usersWithLoans: number;
  usersWithSavings: number;
}

const DashboardContent: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    activeUsers: 0,
    usersWithLoans: 0,
    usersWithSavings: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const navigate = useNavigate();

  const userdetailsClick = (user: UserData) => {
    navigate(`userdetails/${user.id}`, { state: user });
  };

  const perPageOptions = Array.from({ length: 50 }, (_, i) => i + 1);

  useEffect(() => {
    const lendsqrData = async () => {
      try {
        const response = await axios.get(
          "https://api.json-generator.com/templates/VgZ6mgG8pnuA/data",
          {
            headers: {
              Authorization: `Bearer qoojwjhwscn7qbwnhdw21b616yvzxbsx4eyc3hjy`,
            },
          }
        );

        const answers = response.data;

        if (Array.isArray(answers)) {
          setUsers(answers);
          const totalUsers = answers.length;
          const activeUsers = answers.filter(
            (user) => user.status === "Active"
          ).length;
          const usersWithLoans = answers.filter(
            (user) => user.educationAndEmployment.accountType === "Loan"
          ).length;
          const usersWithSavings = answers.filter(
            (user) => user.educationAndEmployment.accountType === "Savings"
          ).length;

          setStats({
            totalUsers,
            activeUsers,
            usersWithLoans,
            usersWithSavings,
          });
        } else {
          console.error("Unexpected data format:", answers);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    lendsqrData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(users.length / usersPerPage);
    let pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, 5, "...", totalPages];
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      } else {
        pages = [
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      }
    }

    return pages.map((page, index) =>
      page === "..." ? (
        <span key={`ellipsis-${index}`} className="ellipsis">
          {page}
        </span>
      ) : (
        <button
          key={`page-${page}`}
          onClick={() => paginate(Number(page))}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div className="dashboard">
      <div className="dashboard__heading">
        <h1>Users</h1>
      </div>
      <div className="dashboard__stats">
        <div className="dashboard__stats-item">
          <img src={dashusers} alt="users icon" />
          <div className="dashboard__stats-item-label">USERS</div>
          <div className="dashboard__stats-item-value">{stats.totalUsers}</div>
        </div>
        <div className="dashboard__stats-item">
          <img src={active} alt="active icon" />
          <div className="dashboard__stats-item-label">ACTIVE USERS</div>
          <div className="dashboard__stats-item-value">{stats.activeUsers}</div>
        </div>
        <div className="dashboard__stats-item">
          <img src={loan} alt="loan icon" />
          <div className="dashboard__stats-item-label">USERS WITH LOANS</div>
          <div className="dashboard__stats-item-value">
            {stats.usersWithLoans}
          </div>
        </div>
        <div className="dashboard__stats-item">
          <img src={savings} alt="savings icon" />
          <div className="dashboard__stats-item-label">USERS WITH SAVINGS</div>
          <div className="dashboard__stats-item-value">
            {stats.usersWithSavings}
          </div>
        </div>
      </div>
      <table className="dashboard__table">
        <thead>
          <tr>
            <th>
              ORGANIZATION
              <img src={filter} alt="filter icon" />
            </th>
            <th>
              USERNAME
              <img src={filter} alt="filter icon" />
            </th>
            <th>
              EMAIL
              <img src={filter} alt="filter icon" />
            </th>
            <th>
              PHONE NUMBER
              <img src={filter} alt="filter icon" />
            </th>
            <th>
              DATE JOINED
              <img src={filter} alt="filter icon" />
            </th>
            <th>
              STATUS
              <img src={filter} alt="filter icon" />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.organization}</td>
              <td onClick={() => userdetailsClick(user)}>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{new Date(user.dateJoined).toLocaleDateString()}</td>
              <td className={`status status-${user.status.toLowerCase()}`}>
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <div className="pagination__left">
          <span>Showing</span>
          <select
            value={usersPerPage}
            onChange={(e) => setUsersPerPage(Number(e.target.value))}
          >
            {perPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span>out of {users.length}</span>
        </div>
        <div className="pagination__right">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="pg__button1"
          >
            &lt;
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(users.length / usersPerPage)}
            className="pg__button2"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

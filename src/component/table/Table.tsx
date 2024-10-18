import React, { useEffect, useState, useRef } from "react";
import filterIcon from "../../assets/icons/filterIcon.svg";
import FilterForm from "../FilterForm/FilterForm";
import options from "../../assets/icons/options.svg";
import OptionsMenu from "../optionsmenu/OptionsMenu";
import "./Table.scss";

interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);

  const filterFormRef = useRef<HTMLDivElement>(null);

  const handleOptionsClick = (index: number) => {
    setMenuOpenIndex(index === menuOpenIndex ? null : index);
  };

  const handleCloseMenu = () => {
    setMenuOpenIndex(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.json-generator.com/templates/mLy1tlxf5tv7/data?status=200&delay=0",
          {
            headers: {
              Authorization: `Bearer 3eoyrx2x18x6kp3nv3qhvcu1nibahgo5u78a0641`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        const formattedData: User[] = data.map((user: any) => ({
          id: user.id,
          organization: user.organization || "Lendstar",
          username: user.username,
          email: user.email,
          phoneNumber: user.phoneNumber,
          dateJoined: new Date(user.dateJoined).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          status: user.status,
        }));

        setUsers(formattedData);
        setFilteredUsers(formattedData);
        setTotalUsers(formattedData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterFormRef.current &&
        !filterFormRef.current.contains(event.target as Node)
      ) {
        setShowFilterForm(false);
      }
    };

    if (showFilterForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilterForm]);

  const handleFilterIconClick = () => {
    setShowFilterForm(!showFilterForm);
  };

  const handleFilter = (filterCriteria: any) => {
    const filtered = users.filter((user) => {
      return (
        (!filterCriteria.organization ||
          user.organization
            .toLowerCase()
            .includes(filterCriteria.organization.toLowerCase())) &&
        (!filterCriteria.username ||
          user.username
            .toLowerCase()
            .includes(filterCriteria.username.toLowerCase())) &&
        (!filterCriteria.email ||
          user.email
            .toLowerCase()
            .includes(filterCriteria.email.toLowerCase())) &&
        (!filterCriteria.status || user.status === filterCriteria.status) &&
        (!filterCriteria.phoneNumber ||
          user.phoneNumber.includes(filterCriteria.phoneNumber))
      );
    });

    setFilteredUsers(filtered);
    setCurrentPage(1);
  };
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser); // Use filteredUsers for table

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleUsersPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUsersPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const renderPaginationButtons = () => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pageNumbers.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pageNumbers.map((number, index) =>
      number === "..." ? (
        <span key={`ellipsis-${index}`} className="ellipsis">
          ...
        </span>
      ) : (
        <button
          key={number}
          className={`pagination-btn ${currentPage === number ? "active" : ""}`}
          onClick={() => handlePageChange(number as number)}
        >
          {number}
        </button>
      )
    );
  };

  return (
    <div className="user-table-container">
      {showFilterForm && (
        <div ref={filterFormRef} className="filter-form-overlay">
          <FilterForm
            onFilter={handleFilter}
            onClose={() => setShowFilterForm(false)}
          />
        </div>
      )}
      <table className="user-table">
        <thead>
          <tr>
            <th>
              ORGANIZATION
              <img
                src={filterIcon}
                alt="Filter"
                className="filter-icon"
                onClick={handleFilterIconClick}
              />
            </th>
            <th>
              USERNAME
              <img
                src={filterIcon}
                alt="Filter"
                className="filter-icon"
                onClick={handleFilterIconClick}
              />
            </th>
            <th>
              EMAIL
              <img
                src={filterIcon}
                alt="Filter"
                className="filter-icon"
                onClick={handleFilterIconClick}
              />
            </th>
            <th>
              PHONE NUMBER
              <img
                src={filterIcon}
                alt="Filter"
                className="filter-icon"
                onClick={handleFilterIconClick}
              />
            </th>
            <th>
              DATE JOINED
              <img
                src={filterIcon}
                alt="Filter"
                className="filter-icon"
                onClick={handleFilterIconClick}
              />
            </th>
            <th>
              STATUS
              <img
                src={filterIcon}
                alt="Filter"
                className="filter-icon"
                onClick={handleFilterIconClick}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <img
                  src={options}
                  alt="Options"
                  className="options-icon"
                  onClick={() => handleOptionsClick(index)}
                />
                {menuOpenIndex === index && (
                  <OptionsMenu userId={user.id} onClose={handleCloseMenu} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container">
        <div className="pagination-info">
          <span>Showing</span>
          <select
            value={usersPerPage}
            onChange={handleUsersPerPageChange}
            className="users-per-page"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span>out of {totalUsers}</span>
        </div>

        <div className="pagination-controls">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            &lt;
          </button>

          {renderPaginationButtons()}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;

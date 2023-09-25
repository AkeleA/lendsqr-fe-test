import React, { useState, useEffect } from "react";
import "./api.scss";
import axios from "axios";
import Dexie from "dexie";

interface User {
  id: number;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
}

interface MyDatabase extends Dexie {
  users: Dexie.Table<User, number>; // Define the 'users' table
}

const db = new Dexie("UserDataDB") as MyDatabase;
db.version(1).stores({
  users: "++id,orgName,userName,email,phoneNumber,createdAt,status",
});

const UsersTable: React.FC = () => {
  const perPage: number = 10; // Number of users per page
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    db.users.toArray().then((data: any[]) => {
      if (data.length > 0) {
        setUsers(data);
      } else {
        axios
          .get(
            "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
          )
          .then((response) => {
            setUsers(response.data);
            // Save the fetched data to IndexedDB
            db.users.bulkAdd(response.data);
          })
          .catch((error) => {
            console.error("Error fetching user profiles:", error);
          });
      }
    });
  }, []);

  const startIndex: number = (currentPage - 1) * perPage;
  const endIndex: number = startIndex + perPage;

  // Function to handle page navigation
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const formatOrgName = (orgName: string) => {
    const shortenedOrgName: string = orgName.slice(0, 7);
    return shortenedOrgName.charAt(0).toUpperCase() + shortenedOrgName.slice(1);
  };

  const formatName = (userName: string) => {
    // Use a regular expression to match characters before '.', '_', or a number
    const match: RegExpMatchArray | null = userName.match(/^[^.0-9_]+/);

    // Check if a match was found, and return it; otherwise, return the original userName
    return match ? match[0] : userName;
  };

  const cleanPhoneNumber = (phoneNumber: string) => {
    const parts: string[] = phoneNumber.split(" x");
    return parts[0];
  };

  const formatEmail = (email: string) => {
    const index: number = email.search(/[._\d]/);

    return index !== -1
      ? email.slice(0, index) + email.slice(email.indexOf("@"))
      : email;
  };

  const formatDate = (createdAt: string) => {
    const date: Date = new Date(createdAt);
    const months: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month: string = months[date.getMonth()];
    const day: number = date.getDate();
    const year: number = date.getFullYear();
    let hour: number = date.getHours();
    const ampm: string = hour >= 12 ? "pm" : "am";
    hour = hour % 12 || 12;
    const minutes: number = date.getMinutes();

    // Function to add the appropriate day suffix (st, nd, rd, or th)
    const addDaySuffix = (day: number) => {
      if (day >= 11 && day <= 13) {
        return `${day}th`;
      }
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    };

    return `${month} ${addDaySuffix(day)}, ${year} ${hour}:${minutes}${ampm}`;
  };

  const statusOptions = [
    { text: "Inactive", backgroundColor: "gray", textColor: "blue" },
    { text: "Pending", backgroundColor: "gray", textColor: "yellow" },
    { text: "Blacklisted", backgroundColor: "violet", textColor: "red" },
    { text: "Active", backgroundColor: "teal", textColor: "green" },
  ];

  const getRandomStatus = () => {
    const statuses = [
      { text: "Inactive", class: "gray-blue" },
      { text: "Pending", class: "gray-yellow" },
      { text: "Active", class: "teal-green" },
      { text: "Blacklisted", class: "pink-blacklisted" },
    ];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };

  return (
    <div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th className="th-1">
                {" "}
                <p>ORGANIZATION</p>
              </th>
              <th className="th-2">
                <p>USERNAME</p>
              </th>
              <th className="th-3">
                <p>EMAIL</p>
              </th>
              <th className="th-4">
                <p>PHONE NUMBER</p>
              </th>
              <th className="th-5">
                <p>DATE JOINED</p>
              </th>
              <th className="th-6">
                <p>STATUS</p>
              </th>
            </tr>
          </thead>
          <tbody className="usedata">
            {users.slice(startIndex, endIndex).map((user, index) => {
              const randomStatus = getRandomStatus(); // Call the function for each user
              return (
                <React.Fragment key={user.id}>
                  <tr>
                    <td className="apiOrgName">
                      {formatOrgName(user.orgName)}
                    </td>
                    <td className="apiName">{formatName(user.userName)}</td>
                    <td className="apiMail">{formatEmail(user.email)}</td>
                    <td className="apiNumber">
                      {cleanPhoneNumber(user.phoneNumber)}
                    </td>
                    <td className="apiCreate">{formatDate(user.createdAt)}</td>
                    <td className={`apiStat ${randomStatus.class}`}>
                      {randomStatus.text}
                    </td>
                  </tr>
                  {index < perPage - 1 && (
                    <tr>
                      <td colSpan={6}>
                        <hr className="faintLine" />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= users.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { db };

export default UsersTable;

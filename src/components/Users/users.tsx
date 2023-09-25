import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import "./users.scss";

type Props = {};

const UserTop = (props: Props) => {
  const [userCount, setUserCount] = useState<number>(0);

  useEffect(() => {
    // Fetch data from the API to get the total user count
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      let totalUsers = 0;
      let page = 1;
      let response;

      do {
        response = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?page=${page}&limit=100`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        totalUsers += data.length;
        page++;

        // Continue fetching until there are no more pages
      } while (response.headers.get("Link")?.includes('rel="next"'));

      setUserCount(totalUsers);
    } catch (error) {
      console.error("Error fetching user data from API:", error);
    }
  };

  return (
    <div className="utop">
      <h1 className="nomine">Users</h1>
      <div className="ugroup1">
        <div className="cover">
          <div className="prop">
            <FontAwesomeIcon icon={faUserGroup} className="useFgroup" />
          </div>
        </div>
        <h2 className="firsth">USERS</h2>
        <p>{userCount}</p>
      </div>
    </div>
  );
};

export default UserTop;

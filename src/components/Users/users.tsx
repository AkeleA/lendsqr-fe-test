import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faUsers,
  faCoins,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
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
        <p className="userNo">{userCount}</p>
      </div>
      <div className="ugroup2">
        <div className="cover2">
          <div className="prop2">
            <FontAwesomeIcon icon={faUsers} className="useFgroup2" />
          </div>
        </div>
        <h2 className="firsth2">ACTIVE USERS</h2>
        <p className="userNo2">{userCount}</p>
      </div>
      <div className="ugroup3">
        <div className="cover3">
          <div className="prop3">
            <FontAwesomeIcon icon={faCoins} className="useFgroup3" />
          </div>
        </div>
        <h2 className="firsth3">USERS WITH LOANS</h2>
        <p className="userNo3">{userCount}</p>
      </div>
      <div className="ugroup4">
        <div className="cover4">
          <div className="prop4">
            <FontAwesomeIcon
              icon={faHandHoldingDollar}
              className="useFgroup4"
            />
          </div>
        </div>
        <h2 className="firsth4">USERS WITH SAVINGS</h2>
        <p className="userNo4">{userCount}</p>
      </div>
    </div>
  );
};

export default UserTop;

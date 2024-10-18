import React, { useEffect, useState } from "react";
import users from "../../assets/icons/users.svg";
import actusers from "../../assets/icons/activeusers.svg";
import userswithloans from "../../assets/icons/userswithloans.svg";
import userswithsavs from "../../assets/icons/userswithsavings.svg";
import "./Statscard.scss";

interface StatItem {
  id: number;
  icon: string;
  label: string;
  value: number | null;
}

const initialStats: StatItem[] = [
  {
    id: 1,
    icon: users,
    label: "USERS",
    value: null,
  },
  {
    id: 2,
    icon: actusers,
    label: "ACTIVE USERS",
    value: null,
  },
  {
    id: 3,
    icon: userswithloans,
    label: "USERS WITH LOANS",
    value: null,
  },
  {
    id: 4,
    icon: userswithsavs,
    label: "USERS WITH SAVINGS",
    value: null,
  },
];

const StatsCard: React.FC = () => {
  const [stats, setStats] = useState<StatItem[]>(initialStats);
  const [error, setError] = useState<string | null>(null);

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

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "API request failed");
        }

        const data = await response.json();

        // Calculate stats from API data
        const totalUsers = data.length;
        const activeUsers = data.filter(
          (user: any) => user.status === "Active"
        ).length;
        const usersWithLoans = data.filter(
          (user: any) => user.educationAndEmployment?.accountType === "Loan"
        ).length;
        const usersWithSavings = data.filter(
          (user: any) => user.educationAndEmployment?.accountType === "Savings"
        ).length;

        // Update stats with actual data
        const updatedStats = stats.map((stat) => {
          switch (stat.id) {
            case 1:
              return { ...stat, value: totalUsers };
            case 2:
              return { ...stat, value: activeUsers };
            case 3:
              return { ...stat, value: usersWithLoans };
            case 4:
              return { ...stat, value: usersWithSavings };
            default:
              return stat;
          }
        });

        setStats(updatedStats);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="stats-container">
        {stats.map((statItem) => (
          <div key={statItem.id} className="stat-card">
            <div className="icon-wrapper">
              <img src={statItem.icon} alt={statItem.label} />
            </div>
            <p className="label">{statItem.label}</p>
            <h2 className="value">
              {statItem.value === null
                ? "Loading..."
                : statItem.value.toLocaleString()}
            </h2>
          </div>
        ))}
      </div>
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default StatsCard;

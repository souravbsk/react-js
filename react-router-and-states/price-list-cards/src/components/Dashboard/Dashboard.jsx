import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const students = [
    {
      id: 1,
      name: "Alice",
      management: 85,
      accounting: 90,
      statistics: 80,
      email: "alice123@example.com",
    },
    {
      id: 2,
      name: "Bob",
      management: 75,
      accounting: 80,
      statistics: 70,
      email: "bob456@example.com",
    },
    {
      id: 3,
      name: "Charlie",
      management: 95,
      accounting: 85,
      statistics: 90,
      email: "charlie789@example.com",
    },
    {
      id: 4,
      name: "David",
      management: 80,
      accounting: 75,
      statistics: 85,
      email: "david234@example.com",
    },
    {
      id: 5,
      name: "Emily",
      management: 70,
      accounting: 60,
      statistics: 75,
      email: "emily567@example.com",
    },
    {
      id: 6,
      name: "Frank",
      management: 90,
      accounting: 85,
      statistics: 80,
      email: "frank901@example.com",
    },
    {
      id: 7,
      name: "Grace",
      management: 80,
      accounting: 90,
      statistics: 75,
      email: "grace234@example.com",
    },
    {
      id: 8,
      name: "Harry",
      management: 95,
      accounting: 85,
      statistics: 90,
      email: "harry567@example.com",
    },
    {
      id: 9,
      name: "Isaac",
      management: 75,
      accounting: 70,
      statistics: 80,
      email: "isaac901@example.com",
    },
    {
      id: 10,
      name: "Julia",
      management: 85,
      accounting: 80,
      statistics: 90,
      email: "julia234@example.com",
    },
    {
      id: 11,
      name: "Kevin",
      management: 90,
      accounting: 95,
      statistics: 85,
      email: "kevin567@example.com",
    },
    {
      id: 12,
      name: "Linda",
      management: 80,
      accounting: 75,
      statistics: 70,
      email: "linda901@example.com",
    },
  ];

  return <div>

    <LineChart width={780} height={250} data={students}>
        <XAxis dataKey="name"></XAxis>
        <YAxis ></YAxis>
        <Line dataKey="management"></Line>
        <Line dataKey="accounting"></Line>
        <Line dataKey="statistics"></Line>
        <Tooltip></Tooltip>
        <Legend></Legend>

    </LineChart>
  </div>;
};

export default Dashboard;

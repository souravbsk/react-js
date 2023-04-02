import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const PhoneHunter = () => {
    const [red,setRed] =useState(true);
  const [phone, setPhone] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadData = data.data.data;
        const phoneData = loadData.map((phone) => {
          const priceInt = phone.slug.split("-")[1];
          const price = parseFloat(priceInt);
          const phonLoadData = {
            name: phone.brand,
            price,
          };
          return phonLoadData;
        });
        setPhone(phoneData);
      });
  }, []);

  return (
    <div>
        <h1 className={red ? "text-red-400" : "text-blue-600"}>Hello</h1>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart width={700} height={250} data={phone}>
          <Bar dataKey="price" fill="#8884d8"></Bar>
          <XAxis dataKey="name"></XAxis>
          <YAxis dataKey="price"></YAxis>
        </BarChart>
      {/* </ResponsiveContainer> */}

      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <PieChart width={600} height={300}>
          <Pie
            data={phone}
            dataKey="price"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default PhoneHunter;

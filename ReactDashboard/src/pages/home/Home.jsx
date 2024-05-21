import React, { useEffect, useMemo, useState } from "react";
import "./home.css";
import Info from "../../components/info/Info.jsx";
import Chart from "../../components/charts/Chart.jsx";
import { data } from "../../data.js";
import Smallwidgets from "../../components/smallwidgets/Smallwidgets.jsx";
import Largewidgets from "../../components/largewidgets/Largewidgets.jsx";
import { userRequest } from "../../requests.js";
const Home = () => {
  const [userstats, setUserstats] = useState([]);

  const Months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/user/stats");
        res.data.map((item) =>
          setUserstats((prev) => [
            ...prev,
            { name: Months[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [Months]);
  console.log(userstats);
  return (
    <div className="homecontainer">
      <Chart data={userstats} title="User Analytics" dataKey="Active" />
      <div className="homewidgets">
        <Smallwidgets />
        <Largewidgets />
      </div>
    </div>
  );
};

export default Home;

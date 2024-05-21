import React, { useEffect, useState } from "react";
import "./info.css";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Info = () => {
  const [income, setincome] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const response = await userRequest.get("orders/income");
        setincome(response.data);
        setPercentage(
          (response.data[1].total * 100) / response.data[0].total - 100
        );
      } catch {}
    };
    getIncome();
  }, []);
  console.log(income);
  return (
    <div className="infocontainer">
      <div className="infoitem">
        <span className="infotitle">Revenue</span>
        <div className="infomoney">
          <span className="money">$22.22</span>
          <span className="moneyrate">
            -$22 <ArrowDownwardIcon />{" "}
          </span>
        </div>
        <span className="infosub"> Compared to last Month</span>
      </div>

      <div className="infoitem">
        <span className="infotitle">Cost</span>
        <div className="infomoney">
          <span className="money"> $22.22</span>
          <span className="moneyrate">
            -$22 <KeyboardDoubleArrowUpIcon />{" "}
          </span>
        </div>
        <span className="infosub"> Compared to last Month</span>
      </div>

      <div className="infoitem">
        <span className="infotitle">Sales</span>
        <div className="infomoney">
          <span className="money">$22.22</span>
          <span className="moneyrate">
            -$22 <ArrowDownwardIcon />{" "}
          </span>
        </div>
        <span className="infosub"> Compared to last Month</span>
      </div>
    </div>
  );
};

export default Info;

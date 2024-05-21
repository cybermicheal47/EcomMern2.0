import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import InsightsIcon from "@mui/icons-material/Insights";
import MessageIcon from "@mui/icons-material/Message";
import ApiIcon from "@mui/icons-material/Api";
import EmailIcon from "@mui/icons-material/Email";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PaidIcon from "@mui/icons-material/Paid";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebarcontainer">
      <div className="sidecontainermain">
        <div className="sidecontainermenu">
          <h3 className="sidetitle">Dashboard</h3>
          <ul className="sidelist">
            <Link className="linkt" to="/">
              <li className="sidelistitem">
                <HomeIcon className="muicon" /> Home
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidecontainermenu">
          <h3 className="sidetitle"></h3>
          <ul className="sidelist">
            <Link to="/products" className="linkstyle">
              <li className="sidelistitem">
                <Inventory2Icon className="muicon" /> Products
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

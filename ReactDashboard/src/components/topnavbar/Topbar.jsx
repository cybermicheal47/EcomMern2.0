import React from "react";
import "./Topbar.css";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import pic from "../../img/pic.jpg";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className="container">
      <div className="containermain">
        <div className="left">
          <Link className="linkt" to="/">
            <span className="logo">Admin Panel</span>
          </Link>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
};

export default Topbar;

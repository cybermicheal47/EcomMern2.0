import React from "react";
import "./userpage.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import pic from "../../img/pic.jpg";
import { Link } from "react-router-dom";
const Userpage = () => {
  return (
    <div className="userpage">
      <div className="usertitlecontainer">
        <h1 className="usertitle">Edit User</h1>
        <Link to="/newuser">
          <button className="usercreate"> Create</button>
        </Link>
      </div>
      <div className="usercontainer">
        <div className="usershow">
          <div className="userpageshow">
            <img src={pic} alt="" className="userpageImg" />
            <div className="userpageTitle">
              <span className="userpageUsername"> Micheal Scofield</span>
              <span className="userpageUserTitle">Full Stack Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">werk99</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.2024</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+441222234</span>
            </div>
            <div className="userShowInfo">
              <EmailIcon className="userShowIcon" />
              <span className="userShowInfoTitle"> micheal@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationOnIcon className="userShowIcon" />
              <span className="userShowInfoTitle"> Berlin</span>
            </div>
          </div>
        </div>
        <div className="userupdate">
          <span className="userpageupdatetitle">Edit</span>
          <form className="userpageform">
            <div className="leftuserupdate">
              <div className="updateuseritem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="text..."
                  className="userpageupdateinput"
                />
              </div>

              <div className="updateuseritem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="text..."
                  className="userpageupdateinput"
                />
              </div>

              <div className="updateuseritem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="text..."
                  className="userpageupdateinput"
                />
              </div>

              <div className="updateuseritem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="text..."
                  className="userpageupdateinput"
                />
              </div>

              <div className="updateuseritem">
                <label> Phone Number</label>
                <input
                  type="text"
                  placeholder="text..."
                  className="userpageupdateinput"
                />
              </div>
            </div>
            <div className="rightuserupdate">
              <div className="uploaduserfile">
                <img src={pic} alt="pic" className="imguserupdate" />
                <input type="file" id="file" className="uploaduserfileicon" />
              </div>
              <button className="userupdatebutton"> Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Userpage;

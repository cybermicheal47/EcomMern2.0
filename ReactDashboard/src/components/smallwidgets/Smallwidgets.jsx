import "./smallwidgets.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import pic from "../../img/pic.jpg";
import { useEffect, useState } from "react";
import { userRequest } from "../../requests";

const Smallwidgets = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await userRequest.get("user/?new=true");
        setusers(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="smallwidget">
      <span className="smallwidgetTitle">New Members</span>
      <ul className="smallwidgetList">
        {users.map((user) => (
          <li className="smallwidgetListItem" key={user._id}>
            <img src={user.img || pic} alt="" className="smallwidgetImg" />
            <div className="smallwidgetUser">
              <span className="smallwidgetUsername">{user.username}</span>
              <span className="smallwidgetUserTitle">Software Engineer</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Smallwidgets;

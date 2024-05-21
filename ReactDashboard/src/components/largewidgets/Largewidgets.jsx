import "./largewidgets.css";
import pic from "../../img/pic.jpg";
import { useEffect, useState } from "react";
import { userRequest } from "../../requests";
import { format } from "timeago.js";
const Largewidgets = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await userRequest.get("orders");
        setOrders(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"largewidgetButton " + type}>{type}</button>;
  };
  return (
    <div className="largewidget">
      {" "}
      <h3 className="largewidgetTitle">Latest transactions</h3>
      <table className="largewidgetTable">
        <tr className="largewidgetTr">
          <th className="largewidgetTh">Customer</th>
          <th className="largewidgetTh">Date</th>
          <th className="largewidgetTh">Amount</th>
          <th className="largewidgetTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="largewidgetTr">
            <td className="largewidgetUser">
              <span className="largewidgetName">{order.userId}</span>
            </td>
            <td className="largewidgetDate">{format(order.createdAt)}</td>
            <td className="largewidgetAmount">${order.amount}</td>
            <td className="largewidgetStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Largewidgets;

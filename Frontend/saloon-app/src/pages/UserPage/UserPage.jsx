import { useState } from "react";
import MyOrders from "../MyOrders/MyOrders";
import MyProfile from "../MyProfile/MyProfile";
import "./UserPage.css";

export default function UserPage() {
  const [selectedComponent, setSelectedComponent] = useState("user");

  return (
    <div className="userpage-main">
      <div className="userpage-div1">
        <p
          className={selectedComponent == "user" ? "selected-component" : ""}
          onClick={() => setSelectedComponent("user")}
        >
          My Profile
        </p>
        <p
          className={selectedComponent == "orders" ? "selected-component" : ""}
          onClick={() => setSelectedComponent("orders")}
        >
          My Orders
        </p>
      </div>
      <div className="userpage-div2">
        {selectedComponent == "user" ? <MyProfile /> : <MyOrders />}
      </div>
    </div>
  );
}

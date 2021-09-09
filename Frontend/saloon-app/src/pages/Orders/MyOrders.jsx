import axios from "axios";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useLocation } from "react-router";
import { G_API_URL } from "../../constants/constants";
import "./MyOrders.css";

export default function MyOrders() {
  let locationProps = useLocation();
  const [orderDetails, setOrderDetails] = useState({
    orders: [],
    user: [],
  });

  const totalPrice = useCallback((order) => {
    return (
      order.services.reduce((acc, val) => acc + val.price, 0) +
      order.products.reduce((acc, val) => acc + val.price * val.quantity, 0)
    );
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchservice();
  }, []);

  const fetchservice = async () => {
    let uid = locationProps.pathname.split("/")[2];
    let orderDetail = [];
    const data = {
      params: {
        uid: uid,
      },
    };
    await axios
      .get(G_API_URL + "/order/", data)
      .then((response) => {
        console.log("response order", response.data);
        orderDetail = response.data;
      })
      .catch((err) => console.log(err));

    setOrderDetails(orderDetail);
    setIsLoading(false);
  };

  const { orders } = orderDetails;

  return (
    <div className="myorders-main">
      {orders.map((order) => (
        <div className="order-root">
          <h2>{order.Payment_status} - 19 August 2021</h2>
          <p>
            Amount - <span className="order-price">Rs {totalPrice(order)}</span>
          </p>
          <p>&#10230;</p>
        </div>
      ))}
    </div>
  );
}

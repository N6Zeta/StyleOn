import { useEffect, useState, useMemo, useCallback } from "react"
import { useLocation } from "react-router";
import { G_API_URL } from "../../constants/constants";
import axios from "axios";
import "../Orders/Orders.css";

export default function OrderHistory() {
  let locationProps = useLocation();
  const [orderDetails, setOrderDetails] = useState({
    orders: [],
    user: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState("user");

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  
  const totalPrice = useCallback((order) => {
    return (
      order.services.reduce((acc, val) => acc + val.price, 0) +
      order.products.reduce((acc, val) => acc + val.price * val.quantity, 0)
    );
  }, []);

  const fetchOrderDetails = async () => {
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

  const renderOrders = ()=>{
    let { orders } = orderDetails;
    orders = orders.filter(order => order.Payment_status.toLowerCase()!=="failed")
    return (orders.map(order => renderOrder(order)))
  }

  const renderOrder = (order)=>{
    const {products, services, order_id} = order;

    console.log("orderid " , order.id)
    console.log("products", products)
    console.log("services", services)
  
    let productPresent = products !== undefined ? true : false;
    let servicePresent = services !== undefined ? true : false;
    let isCancellationAvailable = false;

    if(productPresent || servicePresent){
      if(productPresent){
        products.forEach(p => {
          if(p.shipment_status.toLowerCase() === "on process")
           isCancellationAvailable = true;
          else 
            isCancellationAvailable = false;
        })
      }
      if(servicePresent){
        services.forEach(s => {
          if(s.status.toLowerCase() === "scheduled")
           isCancellationAvailable = true;
          else 
            isCancellationAvailable = false;
        })
      }
    }



    

    console.log("productPresent", productPresent)
    console.log("servicesPresent", servicePresent)
    
    return (
      <div className="order-card">
        <h3 className="h3-heading"> Order id: {order_id} </h3>
        { 
          productPresent && (
            products.map(p=> {
              return (
                <div className="individual-order"> 
                  <div className="f-d f-h-sb">
                    <img className="order-image" src={p.images[0]} alt={p.product_name}/>
                    <div className="body-regular">Product: {p.product_name}</div>
                    <div className="body-regular"> &#x20B9; {p.price}</div>
                    <div className="body-regular"> {p.shipment_status} </div>
                  </div> 
                </div>
              )
            })
          )
        }

        { 
          servicePresent && (
            services.map(s=> {
              return (
                <div className="individual-order"> 
                  <div className="f-d f-h-sb">
                    <img className="order-image" src={s.images[0]} alt={s.service_name}/>
                    <div className="body-regular">Services: {s.service_name}</div>
                    <div className="body-regular">&#x20B9; {s.price}</div>
                    <div className="body-regular"> {s.status} </div>
                  </div> 
                  <div className="f-d f-h-e">
                    { s.status.toLowerCase() === "scheduled" && 
                      <div className = "button-secondary" onClick={()=>reScheduleTheService(s.service_id)}>Re-Schedule</div> 
                    }
                  </div>
                </div>
              )
            })
          )
        }
        <div className="f-d f-v-c f-h-c">
          {isCancellationAvailable && <div className = "face-btn w-40" onClick={()=>cancelTheOrder(order_id)}>Cancel</div> }
        </div>
        
      </div>
    )  
  }


  const cancelTheOrder = async(id)=>{
    console.log("cancelling order", id)
    const data = {
      params: {
        order_id: id,
      },
    };
    await axios
      .delete(G_API_URL + "/order/delete", data)
      .then((response) => {
        console.log("response order", response);
      })
      .catch((err) => console.log(err));

    console.log('fetch the data again');
  }

  const reScheduleTheService = (id)=>{
    console.log("reScheduleTheService" , id)
  }
  

  return (
    <div className="order-container lr-pad-d lr-pad-m f-d f-h-sb tb-pad-d tb-pad-m">
      <div className="order-right">
        {renderOrders()}
      </div>
    </div> 
  );  
}

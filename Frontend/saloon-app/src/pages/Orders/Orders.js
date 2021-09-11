import { useEffect, useState, useMemo, useCallback } from "react"
import { useLocation } from "react-router";
import { G_API_URL } from "../../constants/constants";
import {FAILED, ON_PROCESS, SCHEDULED, DELIVERED, RATE_AND_REVIEW, PRODUCT, SERVICE} from "../../constants/orderConstants"
import UserReview from '../../components/Orders/UserRating'
import { Rating } from 'react-simple-star-rating'
import axios from "axios";
import Star from '../../assets/icons/star.svg'
import Skeleton from "../../skeletons/OrderSkeleton"
import "../Orders/Orders.css";

export default function OrderHistory() {
  let locationProps = useLocation();
  const [orderDetails, setOrderDetails] = useState({
    orders: [],
    user: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const [rating, setRating] = useState(5);
  const [product, setProduct] = useState("");


  useEffect(() => {
    fetchOrderDetails();
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
    orders = orders.filter(order => order.Payment_status.toLowerCase()!==FAILED)
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
          if(p.shipment_status.toLowerCase() === ON_PROCESS)
           isCancellationAvailable = true;
          else 
            isCancellationAvailable = false;
        })
      }
      if(servicePresent){
        services.forEach(s => {
          if(s.status.toLowerCase() === SCHEDULED)
           isCancellationAvailable = true;
          else 
            isCancellationAvailable = false;
        })
      }
    }


    const giveRating = (p, type)=>{
      let obj = {}
      if(type === SERVICE)
        obj.service_id = p.service_id
      else
       obj.product_id = p.product_id
      setProduct(obj)
      setIsModalOpen(true)
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
                    <div className="body-regular">{PRODUCT}: {p.product_name}</div>
                    <div className="body-regular"> &#x20B9; {p.price}</div>
                    <div className="body-regular"> {p.shipment_status} </div>
                  </div> 
                  {p.shipment_status.toLowerCase() === DELIVERED &&
                    <div className="f-d f-h-e rating-component" onClick={()=>giveRating(p,PRODUCT)} > 
                      <img className="rate" src = {Star} alt = "star"/> {RATE_AND_REVIEW} 
                    </div>
                  }
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
                    <div className="body-regular">{SERVICE}: {s.service_name}</div>
                    <div className="body-regular">&#x20B9; {s.price}</div>
                    <div className="body-regular"> {s.status} </div>
                  </div>
                  <div className="f-d f-h-e">
                    { s.status.toLowerCase() === SCHEDULED ? 
                      <div className = "button-secondary" onClick={()=>reScheduleTheService(s.service_id, order_id)}>Re-Schedule</div> 
                      :
                      <div className="rating-component" onClick={()=>giveRating(s,SERVICE)} >
                        <img className="rate" src = {Star} alt = "star"/> {RATE_AND_REVIEW} 
                      </div>
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

  const reScheduleTheService = (service_id, order_id) => {
    console.log("reScheduleTheService" , service_id)
    console.log("reScheduleTheService order", order_id)
  }

  const handleClick = async()=>{
    let uid = locationProps.pathname.split("/")[2];
    const data = {
      uid: uid,
      title: reviewTitle,
      review : reviewDescription,
      media:["","",""],
      featured:false,
      product_or_service:product
    };
    await axios
      .post(G_API_URL + "/review/create", data)
      .then((response) => {
        setIsModalOpen(false)
        console.log("response order", response);
      })
      .catch((err) => console.log(err));

    console.log('fetch the data again');
  }

  const handleRate = (rate) => {
    setRating(rate)
  }
  

  return (
    <>
      { !isLoading ? 
        <div className="order-container lr-pad-d lr-pad-m f-d f-h-sb tb-pad-d tb-pad-m">
          <div className= {`${isModalOpen === true  ?  "order-right-bg"  :  "order-right" }`}>
            {renderOrders()}
          </div>
          {isModalOpen &&
            <div className="review-modal-container">
              <h3 className="h3-heading text-c-d "> {RATE_AND_REVIEW} </h3>
              <Rating onClick={handleRate} ratingValue={rating} size={30} fillColor ={"blue"} />
              <div className="body-regular"> 
                <textarea  className="review-description " rows="5" type="text" placeholder="Review this product" value={reviewDescription} onChange = {(e)=>setReviewDescription(e.target.value)}/>
              </div>
              <div className="body-regular "> 
                <input className="review-title" type="text" placeholder="Title" value={reviewTitle} onChange = {(e)=>setReviewTitle(e.target.value)}/>
              </div>
              <div className="f-d f-v-c f-h-c">
                {reviewDescription && reviewTitle && <div className = "face-btn w-40" onClick={()=>handleClick()}>Submit</div> }
              </div>
            </div>
          }
        </div> 
      :
        <Skeleton /> 
      }
    </>
  );  
}

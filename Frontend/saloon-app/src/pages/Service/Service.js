import React, { useEffect, useState } from "react";
import axios from "axios";
import { G_API_URL } from "../../constants/constants";
import { useLocation } from "react-router";
import Hero from "../../components/Product/Hero";
import ServiceSkeleton from "../../skeletons/IndividualProductSkeleton";
import Recommendation from "../../components/Product/Recommendation";

export default function Service() {
  let locationProps = useLocation();
  const [serviceDetails, setServiceDetails] = useState({
    service: {},
    reviews: {},
    recommendations: {},
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchservice();
  }, []);

  const fetchservice = async () => {
    let service_id = locationProps.pathname.split("/")[2];
    let serviceDetail = [];
    const data = {
      params: {
        service_id: service_id,
      },
    };
    await axios
      .get(G_API_URL + "/service/id", data)
      .then((response) => {
        console.log("response", response.data);
        serviceDetail = response.data;
      })
      .catch((err) => console.log(err));

    setServiceDetails(serviceDetail);
    setIsLoading(false);
  };

  const { service, reviews, recommendations } = serviceDetails;
  console.log("serviceDetails", serviceDetails);

  return (
    <>
      {!isLoading ? (
        <div className="service-container lr-pad-d lr-pad-m tb-pad-d tb-pad-m">
          <Hero content={service[0]} reviews={reviews} callingFrom="service" />
          <Recommendation recommendations={recommendations} />
        </div>
      ) : (
        <ServiceSkeleton />
      )}
    </>
  );
}

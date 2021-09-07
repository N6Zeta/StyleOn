import React, { useEffect, useState } from "react";
import axios from "axios";
import { G_API_URL } from "../../constants/constants";
import { useLocation } from "react-router";
import Hero from "../../components/Product/Hero";
import SalonHero from "../../components/Salon/SalonHero";
import SalonOverview from "../../components/Salon/SalonOverview";
import SalonSkeleton from "../../skeletons/IndividualSalonSkeleton";
import Recommendation from "../../components/Product/Recommendation";

export default function Salon() {
  let locationProps = useLocation();
  const [salonDetails, setSalonDetails] = useState({
    salon: {},
    reviews: {},
    recommendations: {},
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchservice();
  }, []);

  const fetchservice = async () => {
    let salon_id = locationProps.pathname.split("/")[2];
    let salonDetail = [];
    const data = {
      params: {
        salon_id: salon_id,
      },
    };
    await axios
      .get(G_API_URL + "/salon/id", data)
      .then((response) => {
        // console.log("salon sample", response.data);
        salonDetail = response.data;
      })
      .catch((err) => console.log(err));

    setSalonDetails(salonDetail);
    setIsLoading(false);
  };

  const { salon, reviews, recommendations } = salonDetails;
  // console.log("serviceDetails", salonDetails);

  return (
    <>
      {!isLoading ? (
        <div className="service-container lr-pad-d lr-pad-m tb-pad-d tb-pad-m">
          <SalonHero content={salon[0]} callingFrom="salon" />
          <SalonOverview content={salon[0]} reviews={reviews} />
          <Recommendation
            recommendations={recommendations}
            callingFrom="salon"
          />
        </div>
      ) : (
        <SalonSkeleton />
      )}
    </>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { G_API_URL } from "../../constants/constants";
import { useLocation } from "react-router";
import Hero from "../../components/Product/Hero";
import SalonHero from "../../components/Salon/SalonHero";
import SalonOverview from "../../components/Salon/SalonOverview";
import ServiceSkeleton from "../../skeletons/IndividualProductSkeleton";
import Recommendation from "../../components/Product/Recommendation";

export default function Salon() {
    let locationProps = useLocation();
    const [salonDetails, setSalonDetails] = useState({
        service: {},
        reviews: {},
        recommendations: {},
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchservice();
    }, []);

    const fetchservice = async () => {
        let salon_id = locationProps.pathname.split("/")[2];
        let salonDetails = [];
        const data = {
            params: {
                salon_id: salon_id,
            },
        };
        await axios
            .get(G_API_URL + "/salon/id", data)
            .then(response => {
                salonDetails = response.data;
            })
            .catch(err => console.log(err));

        setSalonDetails(salonDetails);
        setIsLoading(false);
    };

    const { salon, reviews, recommendations } = salonDetails;
    console.log("serviceDetails", salonDetails);

    return (
        <>
            {!isLoading ? (
                <div className="service-container lr-pad-d lr-pad-m tb-pad-d tb-pad-m">
                    <SalonHero content={salon[0]} reviews={reviews} callingFrom="salon" />
                    <SalonOverview />
                    {/* <Hero content={salon[0]} reviews={reviews} callingFrom="salon" /> */}
                    <Recommendation recommendations={recommendations} callingFrom="salon" />
                </div>
            ) : (
                <ServiceSkeleton />
            )}
        </>
    );
}

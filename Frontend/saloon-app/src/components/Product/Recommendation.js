import React from "react";
import {RatingComponent}  from "../RatingComponent/RatingComponent";
import {INCLUSIVE, RS, SELLER,  SIMILAR_PRODUCT} from '../../constants/productConstants'
import RecommendationCard from "./RecommendationCard";


export default function Recommendation({recommendations}) {

    const renderRecommendations = ()=>{
        console.log("renderRecommendations", recommendations)
        return (recommendations.map(recommendation => <RecommendationCard  recommendation={recommendation}/>))
    }

    return (
        <>
            <div className="recommendations-container">
                <h5 className="H5-heading">{SIMILAR_PRODUCT}</h5>
                <div className="g-d g-col-6 g-gap-32"> {renderRecommendations()} </div>
            </div>
            <style jsx>
                {`
                    .recommendations-container {
                        height: auto;
                        background-color: var(--dove);
                    }

                    .recommendations-container .H5-heading {
                        margin-bottom: 1rem;
                    }
                `}
            </style>
        </>
    );
}

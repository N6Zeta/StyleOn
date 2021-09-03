import React from 'react'
import {RS} from '../../constants/productConstants'
import {RatingComponent}  from "../RatingComponent/RatingComponent";

export default function RecommendationCard({recommendation}) {
    console.log("heyyyy")
    console.log("reccccc", recommendation)
    const recommendationCard = ()=>{
        return (
            <div className="recommendation-card"> 
                <img className="card-img" src={recommendation.images[0]} alt={recommendation.category} />
                <div className="recommendation-rating"> 
                    <span className=" body-small rating"> {recommendation.rating} </span> 
                    <RatingComponent value={recommendation.rating} size = {18} stars= {1}/>
                </div>
                <div className="card-meta">
                    <span className="rec-title body-small"> {recommendation.name}</span>
                    <div className="rec-desc body-caption"> {recommendation.brand_name}</div>
                    <div className="rec-price body-small">
                        <span className="body-small"> {RS} {recommendation.discounted_price} </span>
                        <strike>
                            <span className="body-caption"> {RS}{recommendation.original_price} </span>
                        </strike>
                        <span className="body-caption offer">
                            ({((recommendation.original_price - recommendation.discounted_price) / recommendation.original_price) * 100}% off)
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="recommendation-card-container">
                {recommendationCard()}
            </div>
            <style jsx>
                {`
                    .recommendation-card-container {
                        height: auto;
                        background-color: var(--dove);
                    }

                    .recommendation-card-container .card-img{
                        height:250px;
                        width:100%;
                    }

                    .recommendation-card-container .card-meta{
                        padding:0.5rem;
                    }
                    
                    .recommendation-card-container .recommendation-card{
                        border: 1px solid var(--snowfall);
                    }

                    .recommendation-card-container .recommendation-card:hover{
                        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                        cursor:pointer;
                    }

                    .recommendation-card span{
                        margin:0;
                    }

                    .recommendation-card .recommendation-rating{
                        margin: -25px 0 0 8px;
                    }

                    .recommendation-card .rec-price{
                        margin:1rem 0 0 0;
                    }


                `}
            </style>
        </>
    )
}

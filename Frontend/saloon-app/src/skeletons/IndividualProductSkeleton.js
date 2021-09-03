import React from "react";

const IndividualProductSkeleton = () => {
    const displayImages = count => {
        let benefitCards = [];
        for (let index = 0; index < count; index++) {
            benefitCards.push(
                <div className="bg-img" key={index}>
                    {" "}
                </div>
            );
        }
        return benefitCards;
    };

    const renderReviews = count => {
        let benefitCards = [];
        for (let index = 0; index < count; index++) {
            benefitCards.push(
                <div className="review-block">
                    <div className="skeleton-heading-36 w-90"> </div>
                    <div className="skeleton-heading-24 w-90"></div>
                </div>
            );
        }
        return benefitCards;
    };

    const renderRecommendations = count => {
        let benefitCards = [];
        for (let index = 0; index < count; index++) {
            benefitCards.push(
                <div className="recommendation-card">
                    <div className="skeleton-image"></div>
                    <div className="card-meta">
                        <div className="skeleton-heading-24 w-100"> </div>
                        <div className="skeleton-heading-24 w-100"> </div>
                    </div>
                </div>
            );
        }
        return benefitCards;
    };

    return (
        <>
            <div className="skeleton-container lr-pad-d tb-pad-d tb-pad-m lr-pad-m">
                <div className="product-hero-container f-d f-h-c">
                    <div className="left-container g-d g-col-2 g-gap-16 ">{displayImages(4)}</div>
                    <div className="right-container">
                        <div className="skeleton-heading w-90"></div>
                        <div className="skeleton-heading-24 w-50"></div>
                        <div className="skeleton-heading w-90"></div>
                        <div className="skeleton-paragraph w-90"></div>
                        <div className="f-d f-h-c">
                            <div className="skeleton-btn">
                                <div className="skeleton-paragraph "></div>
                            </div>
                        </div>
                        <br></br>
                        <hr className="divider"></hr>
                        <div className="review-container tb-pad-d tb-pad-m">
                            <div className="skeleton-heading w-90"></div>
                            {renderReviews(4)}
                        </div>
                    </div>
                </div>
                <div className="recommendations-container tb-pad-d tb-pad-m">
                    <div className="skeleton-heading w-30"></div>
                    <div className="g-d g-col-6 g-gap-32">{renderRecommendations(6)}</div>
                </div>
            </div>

            <style jsx={"true"}>
                {`
                    .skeleton-container .product-hero-container .left-container {
                        width: 55vw;
                        border: 1px solid var(--snowfall);
                        margin-right: 5vw;
                    }

                    .skeleton-container .product-hero-container .left-container .bg-img {
                        background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
                        background-repeat: no-repeat;
                        background-position: Top;
                        height: 450px;
                        margin: 1rem;
                    }

                    .skeleton-container .product-hero-container .right-container {
                        width: 35vw;
                    }

                    .skeleton-container .product-hero-container .skeleton-btn .skeleton-paragraph {
                        width: 150px;
                        height: 14px;
                    }

                    .skeleton-container .review-container .review-block {
                        margin: 2rem 0;
                    }

                    .skeleton-container .recommendations-container .recommendation-card {
                        border: 1px solid var(--snowfall);
                    }

                    .skeleton-container .recommendations-container .card-meta {
                        margin: 0 1rem;
                    }

                    @media only screen and (max-device-width: 760px) {
                    }
                `}
            </style>
        </>
    );
};

export default IndividualProductSkeleton;

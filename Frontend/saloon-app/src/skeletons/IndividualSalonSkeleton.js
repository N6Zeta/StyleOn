import React from "react";

const IndividualSalonSkeleton = () => {
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
            benefitCards.push(<div className="skeleton-image-small"></div>);
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
                <div className="salon-hero-container f-d f-h-sb">
                    <div className="left-container skeleton-card"></div>
                    <div className="right-container g-d g-col-2 g-gap-16">{renderReviews(6)}</div>
                </div>
                <div className="overview tb-pad-d ">
                    <div className="skeleton-heading-30 w-80"></div>
                    <div className="skeleton-video w-100"></div>
                    <div className="skeleton-video w-100"></div>
                </div>
                <div className="recommendations-container tb-pad-d tb-pad-m">
                    <div className="skeleton-heading w-30"></div>
                    <div className="g-d g-col-6 g-gap-32">{renderRecommendations(6)}</div>
                </div>
            </div>

            <style jsx={"true"}>
                {`
                    .skeleton-container .salon-hero-container .left-container {
                        width: 65vw;
                    }

                    .skeleton-container .salon-hero-container .left-container .bg-img {
                        background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
                        background-repeat: no-repeat;
                        background-position: Top;
                        height: 450px;
                        margin: 1rem;
                    }

                    .skeleton-container .salon-hero-container .right-container {
                        width: 20vw;
                    }

                    .skeleton-container .salon-hero-container .skeleton-btn .skeleton-paragraph {
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

export default IndividualSalonSkeleton;

import React from "react";

const OrderSkeleton = () => {
    const renderOrders = count => {
        let benefitCards = [];
        for (let index = 0; index < count; index++) {
            benefitCards.push(
                <div className="order-card">
                    <div className="skeleton-heading-24 w-100"> </div>
                    <div className="individual-order"> 
                    <div className="f-d f-h-sb">
                        <div className="skeleton-image-small order-image"></div>
                        <div className="skeleton-heading-24 w-20"> </div>
                        <div className="skeleton-heading-24 w-20"> </div>
                        <div className="skeleton-heading-24 w-20"> </div>
                    </div> 
                    </div>
                </div>
            );
        }
        return benefitCards;
    };

    return (
        <>
            <div className="skeleton-container lr-pad-d tb-pad-d tb-pad-m lr-pad-m">
                <div className="order-container">
                    {renderOrders(4)}
                </div>
            </div>
      

            <style jsx={"true"}>
                {`
                    .skeleton-container{
                       
                    }

                    .skeleton-container .order-container .order-card{
                        border: 1px solid var(--snowfall);
                        margin:2rem 0;
                        padding:1rem 2rem;
                        height: auto;
                    }

                    .skeleton-container .order-card .individual-order{
                        border: 1px solid var(--snowfall);
                        margin:2rem 0;
                        padding:1rem;
                    }

                    .skeleton-container .order-card .individual-order .order-image{
                        height: 100px;
                        width: 100px;
                    }

                    @media only screen and (max-device-width: 760px) {
                    }
                `}
            </style>
        </>
    );
};

export default OrderSkeleton;

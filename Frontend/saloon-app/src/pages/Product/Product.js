import React, { useEffect, useState } from "react";
import axios from "axios";
import { G_API_URL } from "../../constants/constants";
import { useLocation } from "react-router";
import Hero from "../../components/Product/Hero";
import ProductSkeleton from "../../skeletons/IndividualProductSkeleton";
import Recommendation from "../../components/Product/Recommendation";

export default function Product() {
    let locationProps = useLocation();
    const [productDetails, setProductDetails] = useState({
        product: {},
        reviews: {},
        recommendations: {},
    });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        let product_id = locationProps.pathname.split("/")[2];
        let productDetails = [];
        const data = {
            params: {
                product_id: product_id,
            },
        };
        await axios
            .get(G_API_URL + "/product/id", data)
            .then(response => {
                productDetails = response.data;
            })
            .catch(err => console.log(err));

        setProductDetails(productDetails);
        setIsLoading(false);
    };

    const { product, reviews, recommendations } = productDetails;

    return (
        <>
            {!isLoading ? (
                <div className="product-container lr-pad-d lr-pad-m tb-pad-d tb-pad-m">
                    <Hero content={product[0]} reviews={reviews} callingFrom="product" />
                    <Recommendation recommendations={recommendations} />
                </div>
            ) : (
                <ProductSkeleton />
            )}
        </>
    );
}

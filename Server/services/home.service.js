const homeRepo = require("../repositories/home.repository");
const productRepo = require("../repositories/product.repository");
const reviewRepo = require("../repositories/review.repository");
const userRepo = require("../repositories/user.repository");
const groomingServiceRepo = require("../repositories/groomingServices.repository");

const { GET_SUCCESS, GET_FAILED, POST_SUCCESS, POST_FAILED } = require("../constants/constant");

const getHomeData = async params => {
    console.log("calledd home service");
    try {
        let groomingServiceResponse = await groomingServiceRepo.getGroomingServiceData();
        let productResponse = await productRepo.getProductData();
        let reviewResponse = await reviewRepo.getReviews();

        //Filter only the featured products/salons/reviews
        groomingServiceResponse = groomingServiceResponse.filter(service => service.featured);
        productResponse = productResponse.filter(product => product.featured);
        reviewResponse = reviewResponse.filter(review => review.featured);

        let testimonials = await mapReviewWithUsers(reviewResponse);

        if (groomingServiceResponse && productResponse && reviewResponse) {
            return {
                status: 1,
                message: GET_SUCCESS,
                groomingServices: groomingServiceResponse,
                products: productResponse,
                testimonials: testimonials,
            };
        } else {
            return { status: 0, message: GET_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

//Map the reviews with user
const mapReviewWithUsers = async reviews => {
    let uid = [];
    reviews.map(review => uid.push(review.uid));
    const userResponse = await userRepo.getuserData(uid);

    reviews.map(review => {
        userResponse.map(user => {
            if (review.uid === user.uid) {
                (review.name = user.name), (review.email = user.email);
            }
        });
    });
    return reviews;
};

module.exports = {
    getHomeData,
};
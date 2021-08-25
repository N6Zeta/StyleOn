const orderRepo = require("../repositories/order.repository");
const productRepo = require("../repositories/product.repository");
const userRepo = require("../repositories/user.repository");
const groomingServiceRepo = require("../repositories/groomingServices.repository");
const {
    GET_SUCCESS,
    GET_FAILED,
    POST_SUCCESS,
    POST_FAILED,
    DELETE_SUCCESS,
    DELETE_FAILED,
    UPDATE_SUCCESS,
    UPDATE_FAILED,
} = require("../constants/constant");

const getOrderData = async params => {
    console.log("calledd Salon service");
    try {
        let orderResponse = await orderRepo.getOrderData(params);
        let userResponse = await userRepo.getuserData(params);

        orderResponse = await mapOrdersWithServicesAndProducts(orderResponse);

        console.log("orderResponse", orderResponse);

        if (orderResponse) {
            return { status: 1, message: GET_SUCCESS, orders: orderResponse, user: userResponse };
        } else {
            return { status: 0, message: GET_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

const createOrderData = async params => {
    console.log("calledd Salon service");
    try {
        const response = await orderRepo.createOrderData(params);
        console.log("response", response);
        if (response) {
            return { status: 1, message: POST_SUCCESS, data: response };
        } else {
            return { status: 0, message: POST_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

const updateOrderData = async params => {
    console.log("calledd Salon service");
    try {
        const response = await orderRepo.updateOrderData(params);
        console.log("response", response);
        if (response) {
            return { status: 1, message: UPDATE_SUCCESS, data: response };
        } else {
            return { status: 0, message: UPDATE_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

const deleteOrderData = async params => {
    console.log("calledd Salon service");
    try {
        const response = await orderRepo.deleteOrderData(params);
        console.log("deleteres", response);
        if (response) {
            return { status: 1, message: DELETE_SUCCESS, data: response };
        } else {
            return { status: 0, message: DELETE_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

//Map the order with services
const mapOrdersWithServicesAndProducts = async orders => {
    let serviceId = [];
    let productId = [];
    console.log("orders", orders);
    orders.map(order => {
        if (order.services !== undefined && order.services !== null)
            order.services.map(s => serviceId.push(s.service_id));

        if (order.products !== undefined && order.products !== null)
            order.products.map(p => productId.push(p.product_id));
    });
    let groomingResponse = await groomingServiceRepo.getGroomingServices(serviceId);
    let productResponse = await productRepo.getProducts(productId);

    orders.map(order => {
        if (order.services !== undefined && order.services !== null) {
            order.services.map(s => {
                groomingResponse.map(gServices => {
                    if (gServices.service_id === s.service_id) {
                        // console.log("gServices.name", gServices.name);
                        // console.log("s", s);
                        s.service_name = gServices.name;
                        s.hero_image = gServices.hero_image;
                    }
                });
            });
        }

        if (order.products !== undefined && order.products !== null) {
            order.products.map(p => {
                productResponse.map(prod => {
                    if (prod.product_id === p.product_id) {
                        p.product_name = prod.product_name;
                        p.images = prod.images;
                    }
                });
            });
        }
    });

    // console.log("groomingResponse", groomingResponse);
    // console.log("productResponse", productResponse);

    // console.log("orders", orders);

    return orders;
};


module.exports = {
    getOrderData,
    createOrderData,
    updateOrderData,
    deleteOrderData
} 
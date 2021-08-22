const orderRepo = require("../repositories/order.repository");
const {GET_SUCCESS,GET_FAILED,POST_SUCCESS,POST_FAILED,DELETE_SUCCESS,DELETE_FAILED,
    UPDATE_SUCCESS,
    UPDATE_FAILED,
} = require("../constants/constant")

const getOrderData = async () => {
    console.log("calledd Salon service")
    try {
        const response = await orderRepo.getOrderData();
        if (response) {
            return {status: 1, message: GET_SUCCESS, response};
        } else {
            return {status: 0, message: GET_FAILED };
        }
    } catch (err) {
        console.log(err)
    }
}

const createOrderData = async (params) => {
    console.log("calledd Salon service")
    try {
        const response = await orderRepo.createOrderData(params);
        console.log("response",response)
        if (response) {
            return {status: 1, message: POST_SUCCESS, data:response};
        } else {
            return {status: 0, message: POST_FAILED };
        }
    } catch (err) {
        console.log(err)
    }
}

const updateOrderData = async (params) => {
    console.log("calledd Salon service")
    try {
        const response = await orderRepo.updateOrderData(params);
        console.log("response", response)
        if (response) {
            return {status: 1, message: UPDATE_SUCCESS, data:response};
        } else {
            return {status: 0, message: UPDATE_FAILED};
        }
    } catch (err) {
        console.log(err)
    }
}

const deleteOrderData = async (params) => {
    console.log("calledd Salon service")
    try {
        const response = await orderRepo.deleteOrderData(params);
        console.log("deleteres", response);
        if (response) {
            return {status: 1, message: DELETE_SUCCESS, data:response};
        } else {
            return {status: 0, message: DELETE_FAILED};
        }
    } catch (err) {
        console.log(err)
    } 
}


module.exports = {
    getOrderData,
    createOrderData,
    updateOrderData,
    deleteOrderData
} 
const productRepo = require("../repositories/product.repository");
const {createIndex, updateIndex, deleteIndex} = require("../utils/algolia/algolia");
const {GET_SUCCESS,GET_FAILED,POST_SUCCESS,POST_FAILED,DELETE_SUCCESS,DELETE_FAILED,
    UPDATE_SUCCESS,
    UPDATE_FAILED,
} = require("../constants/constant")

const getProductData = async () => {
    console.log("calledd product service")
    try {
        const response = await productRepo.getProductData();
        if (response) {
            return {status: 1, message: GET_SUCCESS, response};
        } else {
            return {status: 0, message: GET_FAILED };
        }
    } catch (err) {
        console.log(err)
    }
}

const createProductData = async (params) => {
    console.log("calledd product service")
    try {
        const response = await productRepo.createProductData(params);
        console.log("response",response)
        if (response) {
            createIndex(params,response,"Product");
            return {status: 1, message: POST_SUCCESS, data:response};
        } else {
            return {status: 0, message: POST_FAILED };
        }
    } catch (err) {
        console.log(err)
    }
}

const updateProductData = async (params) => {
    console.log("calledd product service")
    try {
        const response = await productRepo.updateProductData(params);
        console.log("response", response)
        if (response) {
            updateIndex(response,"Product");
            return {status: 1, message: UPDATE_SUCCESS, data:response};
        } else {
            return {status: 0, message: UPDATE_FAILED};
        }
    } catch (err) {
        console.log(err)
    }
}

const deleteProductData = async (params) => {
    console.log("calledd product service")
    try {
        const response = await productRepo.deleteProductData(params);
        console.log("deleteres", response);
        if (response) {
            deleteIndex(response,"Product");
            return {status: 1, message: DELETE_SUCCESS, data:response};
        } else {
            return {status: 0, message: DELETE_FAILED};
        }
    } catch (err) {
        console.log(err)
    } 
}


module.exports = {
    getProductData,
    createProductData,
    updateProductData,
    deleteProductData
}
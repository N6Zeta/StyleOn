const groomingServiceRepo = require("../repositories/groomingServices.repository");
const salonRepo = require("../repositories/salon.repository");
const { createIndex, updateIndex, deleteIndex } = require("../utils/algolia/algolia");
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

const getGroomingServiceData = async params => {
    console.log("calledd GroomingService service");
    try {
        const response = await groomingServiceRepo.getGroomingServiceData(params);
        if (response) {
            return { status: 1, message: GET_SUCCESS, response };
        } else {
            return { status: 0, message: GET_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

const getAllServiceData = async params => {
    console.log("getAllServiceData");
    try {
        const serviceResponse = await groomingServiceRepo.getGroomingServiceData(params);
        const salonResponse = await salonRepo.getSalonData();

        if (serviceResponse && salonResponse) {
            return { status: 1, message: GET_SUCCESS, groomingServices: serviceResponse, salons: salonResponse };
        } else {
            return { status: 0, message: GET_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

/* 
    @createIndex Methods  - Save the data in algolia index

*/
const createGroomingServiceData = async params => {
    console.log("calledd GroomingService service");
    try {
        const response = await groomingServiceRepo.createGroomingServiceData(params);
        console.log("response", response);
        if (response) {
            createIndex(params, response, "Grooming_service");
            return { status: 1, message: POST_SUCCESS, data: response };
        } else {
            return { status: 0, message: POST_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

/* 
    @updateIndex Methods  - update the data in algolia index

*/
const updateGroomingServiceData = async params => {
    console.log("calledd GroomingService service");
    try {
        const response = await groomingServiceRepo.updateGroomingServiceData(params);
        console.log("response", response);
        if (response) {
            updateIndex(response, "Grooming_service");
            return { status: 1, message: UPDATE_SUCCESS, data: response };
        } else {
            return { status: 0, message: UPDATE_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

/* 
    @deleteIndex Methods  - Delete the data from algolia index

*/
const deleteGroomingServiceData = async params => {
    console.log("calledd GroomingService service");
    try {
        const response = await groomingServiceRepo.deleteGroomingServiceData(params);
        console.log("deleteres", response);
        if (response) {
            deleteIndex(response, "Grooming_service");
            return { status: 1, message: DELETE_SUCCESS, data: response };
        } else {
            return { status: 0, message: DELETE_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getGroomingServiceData,
    createGroomingServiceData,
    updateGroomingServiceData,
    deleteGroomingServiceData,
    getAllServiceData,
};
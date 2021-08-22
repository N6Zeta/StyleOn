const salonRepo = require("../repositories/salon.repository");
const {createIndex, updateIndex, deleteIndex} = require("../utils/algolia/algolia");
const {GET_SUCCESS,GET_FAILED,POST_SUCCESS,POST_FAILED,DELETE_SUCCESS,DELETE_FAILED,
    UPDATE_SUCCESS,
    UPDATE_FAILED,
} = require("../constants/constant")


const getSalonData = async () => {
    console.log("calledd Salon service")
    try {
        const response = await salonRepo.getSalonData();
        if (response) {
            return {status: 1, message: GET_SUCCESS, response};
        } else {
            return {status: 0, message: GET_FAILED };
        }
    } catch (err) {
        console.log(err)
    }
}

const createSalonData = async (params) => {
    console.log("calledd Salon service")
    try {
        const response = await salonRepo.createSalonData(params);
        console.log("response",response)
        if (response) {
            createIndex(params,response,"Salon");
            return {status: 1, message: POST_SUCCESS, data:response};
        } else {
            return {status: 0, message: POST_FAILED };
        }
    } catch (err) {
        console.log(err)
    }
}

const updateSalonData = async (params) => {
    console.log("calledd Salon service")
    try {
        const response = await salonRepo.updateSalonData(params);
        console.log("response", response)
        if (response) {
            updateIndex(response,"Salon");
            return {status: 1, message: UPDATE_SUCCESS, data:response};
        } else {
            return {status: 0, message: UPDATE_FAILED};
        }
    } catch (err) {
        console.log(err)
    }
}

const deleteSalonData = async (params) => {
    console.log("calledd Salon service")
    try {
        const response = await salonRepo.deleteSalonData(params);
        console.log("deleteres", response);
        if (response) {
            deleteIndex(response,"Salon");
            return {status: 1, message: DELETE_SUCCESS, data:response};
        } else {
            return {status: 0, message: DELETE_FAILED};
        }
    } catch (err) {
        console.log(err)
    } 
}


module.exports = {
    getSalonData,
    createSalonData,
    updateSalonData,
    deleteSalonData
} 
const groomingServiceRepo = require("../repositories/groomingServices.repository");
const {GET_SUCCESS,
    GET_FAILED,
    POST_SUCCESS,
    POST_FAILED
} = require("../constants/constant")

const getGroomingServiceData = async () => {
    try {
        const response = await groomingServiceRepo.getGroomingServiceData();
        if (response) {
            return {status: 1, message: GET_SUCCESS, response};
        } else {
            return {status: 0, message: GET_FAILED};
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getGroomingServiceData
}
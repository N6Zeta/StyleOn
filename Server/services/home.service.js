const homeRepo = require("../repositories/home.repository");
const {GET_SUCCESS,
    GET_FAILED,
    POST_SUCCESS,
    POST_FAILED
} = require("../constants/constant")

const getHomepageData = async () => {
    console.log("calledd home service")
    try {
        const response = await homeRepo.getHomepageData();
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
    getHomepageData
}
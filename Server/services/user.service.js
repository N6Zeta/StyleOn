const userRepo = require("../repositories/user.repository");
const {GET_SUCCESS,
    GET_FAILED,
    POST_SUCCESS,
    POST_FAILED
} = require("../constants/constant")

const getuserData = async () => {
    console.log("calledd user service")
    try {
        const response = await userRepo.getuserData();
        // console.log(response)
        if (response) {
            return {status: 1, message: GET_SUCCESS, response};
        } else {
            return {status: 0, message: GET_FAILED};
        }
    } catch (err) {
        console.log(err)
    }
}

const saveUser = async (params) => {
    console.log("calledd saveUser service")
    console.log("params", params)
    try {
        const response = await userRepo.saveUser(params);
        if (response) {
            return {status: 1, message: POST_SUCCESS, response};
        } else {
            return {status: 0, message: POST_FAILED};
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getuserData,
    saveUser
}
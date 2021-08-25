const userRepo = require("../repositories/user.repository");
const {
    GET_SUCCESS,
    GET_FAILED,
    POST_SUCCESS,
    POST_FAILED,
    DELETE_SUCCESS,
    DELETE_FAILED,
    UPDATE_FAILED,
    UPDATE_SUCCESS,
} = require("../constants/constant");

const getuserData = async (params) => {
    console.log("calledd user service");
    try {
        const response = await userRepo.getuserData(params);
        // console.log(response)
        if (response) {
            return { status: 1, message: GET_SUCCESS, response };
        } else {
            return { status: 0, message: GET_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

const saveUser = async (params) => {
    console.log("calledd saveUser service");
    console.log("params", params);
    try {
        const response = await userRepo.saveUser(params);
        if (response) {
            return { status: 1, message: POST_SUCCESS, response };
        } else {
            return { status: 0, message: POST_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

const updateUser = async (params) => {
    console.log("calledd product service");
    try {
        const response = await userRepo.updateUser(params);
        if (response) {
            return { status: 1, message: UPDATE_SUCCESS, response };
        } else {
            return { status: 0, message: UPDATE_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

const deleteUser = async (params) => {
    console.log("calledd product service");
    try {
        const response = await userRepo.deleteUser(params);
        console.log("deleteres", response);
        if (response) {
            return { status: 1, message: DELETE_SUCCESS, response };
        } else {
            return { status: 0, message: DELETE_FAILED };
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getuserData,
    saveUser,
    updateUser,
    deleteUser,
};
const userServices = require('../../services/user.service');
// const { checkToken } = require("../../../utils/jwt");

const getuserData = async (req,res) => {
    const params = req.params;
    const queryParams = req.query;
    const bodyParams = req.body;
    const response = await userServices.getuserData({
        ...params,
        ...queryParams,
        ...bodyParams
    });
    return res.status(200).send(response);
}

const saveUser = async (req,res) => {
    console.log("save user controller")
    const params = req.params;
    const queryParams = req.query;
    const bodyParams = req.body;
    const response = await userServices.saveUser({
        ...params,
        ...queryParams,
        ...bodyParams
    });
    return res.status(200).send(response);
}

module.exports = {
    getuserData,
    saveUser
}

const express = require('express');
const salonServices = require('../../services/salon.service');
// const { checkToken } = require("../../../utils/jwt");

const getsalonpageData = async (req,res) => {
    const params = req.params;
    const queryParams = req.query;
    const bodyParams = req.body;
    const response = await salonServices.getsalonpageData({
        ...params,
        ...queryParams,
        ...bodyParams
    });
    return res.status(200).send(response);
}

module.exports = {
    getsalonpageData
}

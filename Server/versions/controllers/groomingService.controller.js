const express = require('express');
const groomingServiceServices = require('../../services/groomingService.service');
// const { checkToken } = require("../../../utils/jwt");

const getGroomingServiceData = async (req,res) => {
    const params = req.params;
    const queryParams = req.query;
    const bodyParams = req.body;
    const response = await groomingServiceServices.getGroomingServiceData({
        ...params,
        ...queryParams,
        ...bodyParams
    });
    return res.status(200).send(response);
}

module.exports = {
    getGroomingServiceData
}

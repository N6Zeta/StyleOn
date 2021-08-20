const express = require('express');
const orderServices = require('../../services/order.service');
// const { checkToken } = require("../../../utils/jwt");

const getorderData = async (req,res) => {
    const params = req.params;
    const queryParams = req.query;
    const bodyParams = req.body;
    const response = await orderServices.getorderData({
        ...params,
        ...queryParams,
        ...bodyParams
    });
    return res.status(200).send(response);
}

module.exports = {
    getorderData
}

const express = require('express');
const homeServices = require('../../services/home.service');
// const { checkToken } = require("../../../utils/jwt");

const getHomepageData = async (req,res) => {
    const params = req.params;
    const queryParams = req.query;
    const bodyParams = req.body;
    const response = await homeServices.getHomepageData({
        ...params,
        ...queryParams,
        ...bodyParams
    });
    return res.status(200).send(response);
}

module.exports = {
    getHomepageData
}

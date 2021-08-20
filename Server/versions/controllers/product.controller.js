const express = require('express');
const productServices = require('../../services/product.service');
// const { checkToken } = require("../../../utils/jwt");

const getproductData = async (req,res) => {
    const params = req.params;
    const queryParams = req.query;
    const bodyParams = req.body;
    const response = await productServices.getproductData({
        ...params,
        ...queryParams,
        ...bodyParams
    });
    return res.status(200).send(response);
}

module.exports = {
    getproductData
}

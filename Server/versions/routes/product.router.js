const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
// const { checkToken } = require("../../../utils/jwt");

console.log("calledd product router")
router.get('/', productController.getproductData);

module.exports = router;

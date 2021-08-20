const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
// const { checkToken } = require("../../../utils/jwt");

console.log("calledd order router")
router.get('/', orderController.getorderData);

module.exports = router;

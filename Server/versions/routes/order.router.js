const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const { checkToken } = require("../../utils/firebase/firebase.util");

router.get("/", checkToken, orderController.getOrderData);
router.post("/create", checkToken, orderController.createOrderData);
router.put("/update", checkToken, orderController.updateOrderData);
router.delete("/delete", checkToken, orderController.deleteOrderData);

module.exports = router;

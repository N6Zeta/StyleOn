const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const { checkToken } = require("../../utils/firebase/firebase.util");

router.get("/",  orderController.getOrderData);
router.post("/create",  orderController.createOrderData);
router.put("/update",  orderController.updateOrderData);
router.delete("/delete",  orderController.deleteOrderData);

module.exports = router;

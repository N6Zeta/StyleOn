const express = require('express');
const router = express.Router();
const salonController = require('../controllers/salon.controller');
// const { checkToken } = require("../../../utils/jwt");

console.log("calledd salon router")
router.get('/', salonController.getsalonpageData);

module.exports = router;

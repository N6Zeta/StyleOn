const express = require('express');
const router = express.Router();
const groomingServiceController = require('../controllers/groomingService.controller');
// const { checkToken } = require("../../../utils/jwt");


router.get('/', groomingServiceController.getGroomingServiceData);

module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
// const { checkToken } = require("../../../utils/jwt");


router.get('/', userController.getuserData);
router.post('/create', userController.saveUser);

module.exports = router; 

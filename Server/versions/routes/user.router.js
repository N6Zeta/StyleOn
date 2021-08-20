const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
// const { checkToken } = require("../../../utils/jwt");

console.log("calledd user router")
router.get('/', userController.getuserData);

module.exports = router;

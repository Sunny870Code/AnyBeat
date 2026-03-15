const { route } = require("../app");
const authController = require('../controller/auth.controller')

const express = require('express');


const router = express.Router();

router.post('/register',authController.registerUser)

router.post('/login',authController.loginUser)

router.post('/logout',authController.logoutUser)

module.exports = router;
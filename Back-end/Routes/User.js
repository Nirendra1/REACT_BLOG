const express = require('express');
const router = express.Router();
const UserController = require("../Controller/user");
// const { update } = require('../models/User');
const { authorization }=require("../config/Auth")

//register
router.post('/register',UserController.register)

//login
router.post('/login',UserController.login)

//update
router.put('/update',UserController.update)




module.exports = router;
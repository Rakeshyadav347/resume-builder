const express = require('express');
const { getDesiredNuser } = require('../controllers/authUserController');
const userLogRouter=express.Router();

userLogRouter.post("/userLog",getDesiredNuser);
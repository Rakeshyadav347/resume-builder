const express = require('express');
const adminLogRouter=express.Router();

const authAdminController = require("../controllers/authAdminController");

adminLogRouter.post("/adminLog",authAdminController.getDesiredAdmin);
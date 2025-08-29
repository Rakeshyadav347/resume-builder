const express = require('express');
const adminLogRouter=express.Router();

const authAdminController = require("../controllers/authAdminController");

adminLogRouter.post("/adminLog",authAdminController.getDesiredAdmin);
adminLogRouter.post("/createadmin",authAdminController.createAdmin);
adminLogRouter.get("/subscriptiondetails",authAdminController.userSubscriptions);
adminLogRouter.get("/feedbacks",authAdminController.userFeedbacks);
adminLogRouter.post("/feedbacks/:userId",authAdminController.SingleFeedback);
adminLogRouter.post("/subscriptiondetails/:userId",authAdminController.singleSubscription);
adminLogRouter.get("/alltemplates",getAllTemplates);
adminLogRouter.get("/singletemplate",getsingleTemplate);
adminLogRouter.get("/allblogs",getAllblogs);
adminLogRouter.get("/singleblog",getsingleblog);
adminLogRouter.get("/templatecreation",createtemplate);


const express = require('express');
const adminLogRouter=express.Router();

const authAdminController = require("../controllers/authAdminController");
const {authMiddleware} = require('../middleware/authMiddleware');
const {getAllExpResumes}=require('../controllers/experienceResumecontroller');
const {getAllFresherResumes}=require('../controllers/fresherResumecontroller');
const upload = require("../utils/multer");

adminLogRouter.post("/adminLog",authAdminController.getDesiredAdmin);
adminLogRouter.post("/createadmin",authAdminController.createAdmin);
adminLogRouter.get("/subscriptiondetails",authMiddleware,authAdminController.userSubscriptions);
adminLogRouter.get("/feedbacks",authMiddleware,authAdminController.userFeedbacks);
adminLogRouter.get("/feedbacks/:id",authMiddleware,authAdminController.SingleFeedback);
adminLogRouter.get("/subscriptiondetails/:id",authMiddleware,authAdminController.singleSubscription);
adminLogRouter.get("/alltemplates",authMiddleware,authAdminController.getAllTemplates);
adminLogRouter.get("/singletemplate",authMiddleware,authAdminController.getsingleTemplate);
adminLogRouter.post("/createblog",authMiddleware,upload.single("image"),authAdminController.createBlog);
adminLogRouter.get("/allblogs",authMiddleware,authAdminController.getAllblogs);
adminLogRouter.get("/singleblog",authMiddleware,authAdminController.getsingleblog);
adminLogRouter.post("/templatecreation",authMiddleware,authAdminController.createtemplate);
adminLogRouter.get("/allExpresume",getAllExpResumes);
adminLogRouter.get("/allFresherresume",getAllFresherResumes);

module.exports = adminLogRouter;
const express = require('express');
const { getDesiredNuser,createUser,updateUser, deleteUser, createResume, getUserResumes, getResumeById , updateResume,deleteResume,googleAuth,forgotPassword,resetPassword,createFeedback,createSubscription} = require('../controllers/authUserController');
const userLogRouter=express.Router();
const upload = require("../utils/multer");
const {authMiddleware} = require('../middleware/authMiddleware');
const {createExpResume,getMyExpResumes,updateExpResume,deleteExpResume,getExpResumeById}=require('../controllers/experienceResumecontroller');
const {createFresherResume,getFresherResumeById,getMyFresherResumes,updateFresherResume,deleteFresherResume}=require('../controllers/fresherResumecontroller');

userLogRouter.get("/google",googleAuth);
userLogRouter.post("/forgot-password",forgotPassword);
userLogRouter.post("/reset-password",resetPassword);
userLogRouter.post("/userLog",getDesiredNuser);
userLogRouter.post("/createuser",createUser);
userLogRouter.put("/userLog/updateuser",authMiddleware,upload.single("Image"),updateUser);
userLogRouter.delete("/userLog/deleteuser",authMiddleware,deleteUser);
userLogRouter.post("/userLog/createuserSubscription",authMiddleware,createSubscription);
userLogRouter.post("/userLog/createfeedback",authMiddleware,createFeedback);
userLogRouter.post("/userLog/createResume",authMiddleware,createResume);
userLogRouter.get("/userLog/allResumes",authMiddleware,getUserResumes);
userLogRouter.get("/userLog/resume/:id",authMiddleware,getResumeById);
userLogRouter.put("/userLog/updateresume/:id",authMiddleware,updateResume);
userLogRouter.delete("/userLog/deleteresume/:id",authMiddleware,deleteResume);

userLogRouter.post("/userLog/createExpresume",authMiddleware,createExpResume);
userLogRouter.get("/userLog/getMyExpresume",authMiddleware,getMyExpResumes);
userLogRouter.get("/userLog/getMyExpresumeID/:id",authMiddleware,getExpResumeById);
userLogRouter.put("/userLog/updateExpresume/:id",authMiddleware,updateExpResume);
userLogRouter.delete("/userLog/deleteExpresume/:id",authMiddleware,deleteExpResume);

userLogRouter.post("/userLog/createfreshresume",authMiddleware,createFresherResume);
userLogRouter.get("/userLog/getMyfreshresume",authMiddleware,getMyFresherResumes);
userLogRouter.get("/userLog/getMyfreshresumeID/:id",authMiddleware,getFresherResumeById);
userLogRouter.put("/userLog/updatefreshresume:id",authMiddleware,updateFresherResume);
userLogRouter.delete("/userLog/deletefreshresume:id",authMiddleware,deleteFresherResume);


module.exports=userLogRouter;
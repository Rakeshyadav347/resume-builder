const express = require('express');
const { getDesiredNuser,createUser,updateUser, deleteUser, createResume, getUserResumes, getResumeById , updateResume,deleteResume} = require('../controllers/authUserController');
const userLogRouter=express.Router();


userLogRouter.get("/google",googleAuth);
userLogRouter.post("/userLog",getDesiredNuser);
userLogRouter.post("/createuser",createUser);
userLogRouter.put("/updateuser",updateUser);
userLogRouter.delete("/deleteuser",deleteUser);
userLogRouter.post("/userLog/createResume:id",createResume);
userLogRouter.get("/userLog/allResumes", getUserResumes);
userLogRouter.get("/userLog/resume:id",getResumeById);
userLogRouter.put("/userLog/updateresume:id", updateResume);
userLogRouter.delete("/userLog/deleteresume:id",deleteResume);

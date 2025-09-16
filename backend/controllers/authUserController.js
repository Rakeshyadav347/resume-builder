const Userauth = require('../models/UserDashboard/Userauth');
const Resume = require('../models/UserDashboard/ResumeSchema');
const Feedback = require('../models/AdminDashboard/feedbackSchema')
const Subscriptions = require('../models/AdminDashboard/subscriptionShema');
const axios = require('axios');
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { oauth2Client } = require('../utils/googleClient');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


exports.getDesiredNuser = async (req, res) => {
  try {
    const { username, password } = req.body;

    
    const NUser = await Userauth.findOne({ username });
    if (!NUser) {
      return res.status(401).json({ message: "Invalid credentials (username)" });
    }

    
    const isMatch = await bcrypt.compare(password, NUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials (password)" });
    }

   
    const token = jwt.sign(
      { id: NUser._id, username: NUser.username, role: "user" }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" } 
    );

    
    res.status(200).json({
      message: "Login successful",
      token, 
      user: {
        id: NUser._id,
        username: NUser.username,
        email: NUser.email
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



       
 exports.createUser = async (req, res) => {

  const {email ,username ,password} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new Userauth({
    email:email,
    username: username,
    password: hashedPassword,
  });

  await user.save();

  res.status(201).json(user);

}


exports.updateUser = async (req, res) => {
  try {
    const id = req.user.id; 
    const updates = { ...req.body };

    
    if (req.file) {
      updates.Image = req.file.path; 
    }

    
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    
    const activityEntry = {
      action: "Profile Updated",
      dateTime: new Date()
    };

    
    const updatedUser = await Userauth.findByIdAndUpdate(
      id,
      {
        $set: updates,
        $push: { activityLog: activityEntry }
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully & activity logged",
      user: updatedUser
    });
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const  id = req.user.id; 
    const deleted = await Userauth.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.createFeedback = async (req, res) => {
  try {
    const userId=req.user.id;
    const { name, email, contact, message } = req.body;

    const newFeedback = new Feedback({
      feedbackId:userId,
      name,
      email,
      contact,
      message,
    });

    await newFeedback.save();

    res.status(201).json({
      message: "Feedback submitted successfully!",
      data: newFeedback
    });
  } catch (error) {
    console.error("Error creating feedback:", error);
    res.status(500).json({ message: "Server error while creating feedback", error: error.message });
  }
};



exports.createResume = async (req, res) => {
  try {
    
    const  id  = req.user.id;

    
    const resumeData = { ...req.body, userId: id };

    const newResume = new Resume(resumeData);
    await newResume.save();
    
    res.status(201).json({ 
        message: "Resume created successfully!", 
        data: newResume 
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
        return res.status(400).json({ message: "Validation failed", errors: error.errors });
    }
    console.error("Error creating resume:", error);
    res.status(500).json({ message: "Server error while creating resume." });
  }
};



exports.getUserResumes = async (req, res) => {
    try {
        const userId = req.user.id;

        const resumes = await Resume.find({ userId: userId }).sort({ updatedAt: -1 });

        if (!resumes) {
            return res.status(404).json({ message: "No resumes found for this user." });
        }

        res.status(200).json({
            message: "Resumes retrieved successfully!",
            count: resumes.length,
            data: resumes
        });
    } catch (error) {
        console.error("Error fetching user resumes:", error);
        res.status(500).json({ message: "Server error while fetching resumes." });
    }
};



exports.getResumeById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId  = req.user.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid resume ID format." });
        }

        const resume = await Resume.findById(id);

        if (!resume) {
            return res.status(404).json({ message: "Resume not found." });
        }

        
        if (resume.userId.toString() !== userId) {
            return res.status(403).json({ message: "Access denied. You are not authorized to view this resume." });
        }

        res.status(200).json({
            message: "Resume retrieved successfully!",
            data: resume
        });
    } catch (error) {
        console.error("Error fetching resume by ID:", error);
        res.status(500).json({ message: "Server error while fetching resume. ",  error: error.message,          
    stack: error.stack});
    }
};


 
exports.updateResume = async (req, res) => {
    try {
        const { id } = req.params;
        const  userId  = req.user.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid resume ID format." });
        }
        
        const resumeToUpdate = await Resume.findById(id);

        if (!resumeToUpdate) {
            return res.status(404).json({ message: "Resume not found." });
        }
        
        
        if (resumeToUpdate.userId.toString() !== userId) {
            return res.status(403).json({ message: "Access denied. You cannot update this resume." });
        }

        const updatedResume = await Resume.findByIdAndUpdate(id, req.body, {
            new: true, 
            runValidators: true, 
        });

        res.status(200).json({
            message: "Resume updated successfully!",
            data: updatedResume
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: "Validation failed", errors: error.errors });
        }
        console.error("Error updating resume:", error);
        res.status(500).json({ message: "Server error while updating resume.",error: error.message,         
    stack: error.stack });
    }
};



exports.deleteResume = async (req, res) => {
    try {
        const { id } = req.params;
        const  userId = req.user.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid resume ID format." });
        }

        const resumeToDelete = await Resume.findById(id);
        
        if (!resumeToDelete) {
            return res.status(404).json({ message: "Resume not found." });
        }

        
        if (resumeToDelete.userId.toString() !== userId) {
            return res.status(403).json({ message: "Access denied. You cannot delete this resume." });
        }

        await Resume.findByIdAndDelete(id);

        res.status(200).json({ message: "Resume deleted successfully." });
    } catch (error) {
        console.error("Error deleting resume:", error);
        res.status(500).json({ message: "Server error while deleting resume." });
    }
};

exports.createSubscription = async (req, res) => {
  try {
     const subsId =req.user.id;
    const { subscriptionPlan, paymentId, price, duration, paymentDate, renewDate } = req.body;

    const newSubscription = new Subscriptions({
      subsId,
      subscriptionPlan,
      paymentId,
      price,
      duration,
      paymentDate,
      renewDate
    });

    await newSubscription.save();

    res.status(201).json({
      message: "Subscription created successfully!",
      data: newSubscription
    });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ message: "Server error while creating subscription", error: error.message });
  }
};

exports.googleAuth = async (req, res) => {
    const code = req.query.code;
    try {
        const googleRes = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(googleRes.tokens);
        const userRes = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
        );
        const { email, name, picture } = userRes.data;
        
        let user = await Userauth.findOne({ email });

        if (!user) {
            user = await Userauth.create({
              username: name,
              email,
              Image: picture,
              provider: "google",
              googleId: userRes.data.id,
            });
                }else if (user.provider === "local" && !user.googleId) {
                  user.googleId = userRes.data.id;
                  user.provider = "google";
                  await user.save();
}
        const { _id } = user;
        const token = jwt.sign({ _id, email },
            process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_TIMEOUT,
        });
        res.status(200).json({
            message: 'success',
            token,
            user,
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
};

exports.forgotPassword = async (req ,res ) =>{
      const { email } = req.body;

  try {
    const user = await Userauth.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    
    const otp = otpGenerator.generate(6, {
      digits: true,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false
    });

    
    user.otp = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000;
    await user.save();

    
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    await transporter.sendMail({
      to: user.email,
      from: process.env.EMAIL_USER,
      subject: "Password Reset OTP",
      html: `<h2>Your OTP is ${otp}</h2><p>It will expire in 5 minutes.</p>`
    });

    res.json({ message: "OTP sent to your email" ,email: user.email});
  } catch (err) {
    console.error("Error sending OTP:", err);
    res.status(500).json({ message: "Error sending OTP",error: err.message,         
    stack: err.stack  });
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await Userauth.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    
    user.otpVerified = true;
    await user.save();

    res.json({ message: "OTP verified successfully" });
  } catch (err) {
    console.error("Error verifying OTP:", err);
    res.status(500).json({ message: "Error verifying OTP" });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await Userauth.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.otpVerified) {
      return res.status(400).json({ message: "OTP not verified" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    
    user.otp = undefined;
    user.otpExpires = undefined;
    user.otpVerified = undefined;

    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (err) {
    console.error("Error resetting password:", err);
    res.status(500).json({ message: "Error resetting password" });
  }
};





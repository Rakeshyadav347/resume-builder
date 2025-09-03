const Userauth = require('../models/UserDashboard/Userauth');
const Resume = require('../models/UserDashboard/ResumeSchema');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const { oauth2Client } = require('../utils/googleClient');

exports.getDesiredNuser = async (req ,res) =>{
  const {username , password}= req.body;
       const NUser = await Userauth.findone({username : username , password:password} );
  
        if (username !== Userauth.username) {
         return res.status(401).json({ message: "Invalid credentials" });
        }
        if(password !== Userauth.password){
        return res.status(401).json({ message: "Invalid credentials" });
        }
       res.json({id:NUser._id,username:NUser.username});
}

exports.getAllUsers = async(req, res) =>{
       const AllUser = await Userauth.find({});
  
        if (AllUser<0) {
         return res.status(401).json({ message: "NO Users retrieved " });
        }
       
       res.status(200).json(NUser);
}

       
 exports.createUser = async (req, res) => {

  const {username ,password} = req.body;

  const user = new Userauth({
    username: username,
    password: password,
  });

  await user.save();

  res.status(201).json(user);

}


exports.updateUser = async(req ,res) =>{

    const {username ,password}= req.body;
    const user = Userauth({
      username : username ,
      password : password,
    })

    await user.save();
    res.status(204).json(user);

}

exports.deleteUser = (req , res) =>{
        const{id} =  req.body;
       const User =  Userauth.deleteOne({id : id});

       if(id !== User.id){
        return res.status(504).json({message :"User is already deleted"});
       }

       res.status(504).json(User);
}




exports.createResume = async (req, res) => {
  try {
    
    const userId = req.user.id; 

    
    const resumeData = { ...req.body, userId };

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
        const userId = req.user.id;

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
        res.status(500).json({ message: "Server error while fetching resume." });
    }
};


 
exports.updateResume = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

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
        res.status(500).json({ message: "Server error while updating resume." });
    }
};



exports.deleteResume = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

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
                name,
                email,
                image: picture,
            });
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




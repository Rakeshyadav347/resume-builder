const authAdmin = require('../models/AdminDashboard/authAdmin');
const Subscriptions = require('../models/AdminDashboard/subscriptionShema');
const Feedback = require('../models/AdminDashboard/feedbackSchema');
const Resume = require('../models/AdminDashboard/templateSchema');
const tpcreation = require('../models/AdminDashboard/templatecreationschema')
const blogs = require('../models/AdminDashboard/blogSchema');
const Userauth = require('../models/UserDashboard/Userauth');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cloudinary = require("../utils/cloudinary");


exports.getDesiredAdmin = async (req, res) => {
  try {
    const { adminName, password } = req.body;

    const adminUser = await authAdmin.findOne({ adminName });
    if (!adminUser) {
      return res.status(401).json({ message: "Invalid credentials (adminName)" });
    }

    
    const isMatch = await bcrypt.compare(password, adminUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials (password)" });
    }

    
    const token = jwt.sign(
      { id: adminUser._id, adminName: adminUser.adminName }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" } 
    );

    res.status(200).json({
      message: "Login successful",
      token,  
      admin: {
        id: adminUser._id,
        adminName: adminUser.adminName,
        email: adminUser.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



exports.createAdmin = async (req, res) => {
  try {
    const { adminName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new authAdmin({ adminName, email, password:hashedPassword });
    await admin.save();

    res.status(201).json(admin);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};







exports.userSubscriptions = async (req, res) => {
  try {
    const allsubscrip = await Subscriptions.find({});
    if (allsubscrip.length > 0) {
      res.status(200).json(allsubscrip);
    } else {
      res.status(404).json({ message: "No subscriptions found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



exports.singleSubscription = async (req, res) => {
  try {
    const { userId } = req.params;
    const subscription = await Subscriptions.findOne({ userId });

    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    res.status(200).json(subscription);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};





exports.userFeedbacks = async (req, res) => {
  try {
    const allFeedbacks = await Feedback.find({});
    if (allFeedbacks.length > 0) {
      res.status(200).json(allFeedbacks);
    } else {
      res.status(404).json({ message: "No feedbacks found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



exports.SingleFeedback = async (req, res) => {
  try {
    const { userId } = req.params;
    const feedback = await Feedback.findOne({ userId });

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



exports.getAllTemplates = async (req, res) => {
  try {
    const allTemplates = await Resume.find({});
    if (allTemplates.length > 0) {
      res.status(200).json(allTemplates);
    } else {
      res.status(404).json({ message: "No templates found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



exports.getsingleTemplate = async (req, res) => {
  try {
    const { templateId } = req.params;
    const template = await Resume.findById(templateId);

    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }

    res.status(200).json(template);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


exports.createtemplate = async (req, res) => {
  try {
    const { title, tags, description, previewImage, templateFile, sampleFile, isActive, createdAt } = req.body;

    const tpcreate = new tpcreation({
      title,
      tags,
      description,
      previewImage,
      templateFile,
      sampleFile,
      isActive,
      createdAt
    });

    await tpcreate.save();
    res.status(201).json(tpcreate);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.createResume = async (req, res) => {
  try {
    const { userId, templateId, profile, workExperience, skills } = req.body;

    
    const template = await tpcreation.findById(templateId);
    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }

    const resume = new Resume({
      userId,
      templateId,
      profile,
      workExperience,
      skills
    });

    await resume.save();

    res.status(201).json({
      message: "Resume created successfully!",
      data: resume
    });
  } catch (error) {
    console.error("Error creating resume:", error);
    res.status(500).json({ message: "Server error while creating resume", error: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { title, keywords, slug, description, content } = req.body;

    // check required fields
    if (!title || !keywords || !slug || !description) {
      return res.status(400).json({
        message: "All required fields (title, keywords, slug, description) must be provided"
      });
    }

    const data = { title, keywords, slug, description, content };

    // handle image upload
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "blog_images",
      });
      data.image = result.secure_url;
    } else {
      return res.status(400).json({ message: "Image is required" });
    }

    const newBlog = await blogs.create(data);

    res.status(201).json({
      message: "Blog created successfully!",
      data: newBlog,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};






exports.getAllblogs = async (req, res) => {
  try {
    const allblogs = await blogs.find({}).sort({ createdAt: -1 }); 
    if (allblogs.length > 0) {
      res.status(200).json(allblogs);
    } else {
      res.status(404).json({ message: "No blogs found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};




exports.getsingleblog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const singleblog = await blogs.findById(blogId);

    if (!singleblog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(singleblog);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const AllUsers = await Userauth.find({});
    if (AllUsers.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(AllUsers);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.blogsCount = async (req, res) => {
  try {
    const count = await blogs.countDocuments({});
    res.status(200).json({ total: count });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.userCount = async (req, res) => {
  try {
    const count = await Userauth.countDocuments({});
    res.status(200).json({ total: count });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.SubscriptionsCount = async (req, res) => {
  try {
    const count = await Subscriptions.countDocuments({});
    res.status(200).json({ total: count });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.ResumeCount = async (req, res) => {
  try {
    const count = await Resume.countDocuments({});
    res.status(200).json({ total: count });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



exports.dsubscriptionCount = async (req, res) => {
  try {
    const counts = await Subscriptions.aggregate([
      {
        $group: {
          _id: "$subscriptionPlan",
          total: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json(counts);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

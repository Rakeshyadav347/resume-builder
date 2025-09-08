const ExpResume = require("../models/UserDashboard/ExperiencedRSchema");


exports.createExpResume = async (req, res) => {
  try {
    const resume = new ExpResume({
      userId: req.user.id, 
      ...req.body,
    });

    const savedResume = await resume.save();
    res.status(201).json({
      success: true,
      message: "Resume created successfully",
      data: savedResume,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


exports.getAllExpResumes = async (req, res) => {
  try {
    const resumes = await ExpResume.find().populate("userId", "username email");
    res.status(200).json({ success: true, data: resumes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.getExpResumeById = async (req, res) => {
  try {
    const resume = await ExpResume.findOne({
      _id: req.params.id,
      userId: req.user.id, 
    }).populate("userId", "username email");

    if (!resume) {
      return res
        .status(404)
        .json({ success: false, message: "Resume not found or unauthorized" });
    }

    res.status(200).json({ success: true, data: resume });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.updateExpResume = async (req, res) => {
  try {
    const updatedResume = await ExpResume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, 
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedResume) {
      return res
        .status(404)
        .json({ success: false, message: "Resume not found or unauthorized" });
    }

    res.status(200).json({
      success: true,
      message: "Resume updated successfully",
      data: updatedResume,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


exports.deleteExpResume = async (req, res) => {
  try {
    const deletedResume = await ExpResume.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id, 
    });

    if (!deletedResume) {
      return res
        .status(404)
        .json({ success: false, message: "Resume not found or unauthorized" });
    }

    res
      .status(200)
      .json({ success: true, message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getMyExpResumes = async (req, res) => {
  try {
    const resumes = await ExpResume.find({ userId: req.user.id });
    res.status(200).json({ success: true, data: resumes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

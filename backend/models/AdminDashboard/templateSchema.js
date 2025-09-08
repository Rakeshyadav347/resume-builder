const mongoose = require("mongoose");

const workExperienceSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String },
  location: { type: String },
  responsibilities: [String]
});

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String }
});

const resumeSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Userauth", 
    required: true 
  }, 

  templateId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "templatecreations", 
    required: true 
  }, 

  profile: {
    name: { type: String, required: true },
    jobTitle: { type: String },
    contact: {
      phone: { type: String },
      email: { type: String },
      linkedin: { type: String },
      website: { type: String }
    },
    summary: { type: String }
  },

  workExperience: [workExperienceSchema],
  skills: [skillSchema],

}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);

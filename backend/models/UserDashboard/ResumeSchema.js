
const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Userauth", 
    required: true, 
    index: true 
  },

  
  personalInfo: {
    fullName: { type: String, required: true },
    role: { type: String },              
    email: { type: String, required: true },
    website: { type: String },
    linkedin: { type: String }
  },

  
  education: [{
    institution: String,
    degree: String,
    startDate: String, 
    endDate: String,
    location: String,
    description: String
  }],

  
 skills: [{
    category: { type: String, required: true }, 
    items: [String] ,
  }],
  
  extras: [{
    title: String,
    description: String
  }],

  
  experiences: [{
    company: String,
    position: String,
    startDate: String, 
    endDate: String,
    isCurrent: { type: Boolean, default: false },
    description: String
  }],

  
 
  status: { type: String, enum: ["draft", "published"], default: "draft" }

}, { timestamps: true });

module.exports = mongoose.model("Resumecreation", resumeSchema);

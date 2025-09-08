const mongoose = require("mongoose");

const userSelectedTemplateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  templateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Template",
    required: true
  },
  resumeData: {
    name: String,
    email: String,
    phone: String,
    address: String,
    summary: String,
    experience: [
      {
        company: String,
        role: String,
        startDate: Date,
        endDate: Date,
        description: String
      }
    ],
    education: [
      {
        school: String,
        degree: String,
        startDate: Date,
        endDate: Date
      }
    ],
    skills: [String],
    projects: [
      {
        title: String,
        description: String,
        link: String
      }
    ]
  },
  selectedAt: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  isDownloaded: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("UserSelectedTemplate", userSelectedTemplateSchema);

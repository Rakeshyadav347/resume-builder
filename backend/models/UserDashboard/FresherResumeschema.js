
const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Userauth", 
    required: true, 
    index: true 
  },

  
  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String },
    stateOrUnionTerritory: { type: String },
    photoUrl: { type: String }, 
    city:{type:String},
    district:{type:String},
    jobTitle: { type: String },
    website: { type: String },
    linkedin: { type: String },
    github: { type: String },
    languages: [String],
    hobbies: [String]
  },

  
  education: [{
    schoolName: { type: String, required: true },     
    degree: { type: String, required: true },         
    fieldOfStudy: { type: String },                   
    startDate: { type: Date, required: true },        
    endDate: { type: Date },                          
    location: { type: String },                       
    grade: { type: String },                          
    honors: [String],                                 
    description: { type: String }                     
  }],

  

  
  certificates: [{
    certificateName: { type: String, required: true },          
    issuingOrganization: { type: String, required: true },      
    credentialId: { type: String },                            
    credentialUrl: { type: String },                            
    startDate: { type: Date, required: true },                  
    endDate: { type: Date },                                    
    description: { type: String }                               
  }],

  
  projects: [{
    projectTitle: { type: String, required: true },
    organizationName: { type: String },                        
    role: { type: String },                                    
    projectUrl: { type: String },                              
    startDate: { type: Date, required: true },
    endDate: { type: Date },                                   
    description: { type: String },                             
    toolsAndTechnologies: [String]                             
  }],

  
  skills: [{
    skillCategory: { type: String, required: true },            
    skillName: [{ type: String, required: true }],              
    proficiency: { type: String, enum: ["Beginner", "Intermediate", "Advanced", "Expert"],default: "Beginner" } 
  }],

  summary:{
    type:String,
  },

  
  title: { type: String, default: "Fresher Resume" },
  status: { type: String, enum: ["draft", "published"], default: "draft" }

}, { timestamps: true });

module.exports = mongoose.model("fresherResume", resumeSchema);

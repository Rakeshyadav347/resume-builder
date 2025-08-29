const mongoose = require("mongoose");

const templatecreationSchema = new mongoose.Schema({
  title: {
     type: String,
      required: true 
    },          
  tags: [ 
  {
     type: String 
    }],                         
  description: {
     type: String
     },                    
  previewImage: {
     type: String 
    },                 
  templateFile: {
     type: String 
    },                   
  sampleFile: {
     type: String 
    },                      
  isActive: {
     type: Boolean,
      default: true 
    },       
  createdAt: {
     type: Date,
      default: Date.now 
    }      
});

module.exports = mongoose.model("templatecreation", templatecreationSchema);


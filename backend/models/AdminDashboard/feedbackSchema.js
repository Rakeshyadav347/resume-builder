const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  feedbackId: {
     type: Number,
      required: true,
       unique: true
       },  
  name: {
     type: String,
      required: true 
    },                      
  email: {
     type: String,
      required: true 
    },                     
  contact: {
     type: String 
    },                                   
  message: {
     type: String,
      required: true 
    },                   
  createdAt: {
     type: Date,
      default: Date.now 
    } 
});

module.exports = mongoose.model("Feedback", feedbackSchema);

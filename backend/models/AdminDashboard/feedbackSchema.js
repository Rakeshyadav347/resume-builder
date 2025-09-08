const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  feedbackId: {
      type: mongoose.Schema.Types.ObjectId,
    ref: "Userauth",   
    required: true
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

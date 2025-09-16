const mongoose = require('mongoose');
const blogschemas = mongoose.Schema({
     title:{
      type:String,
      required:true,
    
     },
     keywords:{
      type:String,
      
     },
     slug:{
      type:String,
      

     },
     description:{
      type:String,

     },
     content:{
      type:String,

     },
     image:{
      type:String,
      required:true,
     },
     author: {
      type: String,
      default: "Admin", // fallback if no author is provided
    },

},
{ timestamps: true }
);
module.exports= mongoose.model("blogs",blogschemas);
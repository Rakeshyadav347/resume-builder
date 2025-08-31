const mongoose = require('mongoose');
const blogschemas = mongoose.Schema({
     title:{
      type:String,
      required:true,
    
     },
     keywords:{
      type:String,
      required:true,
     },
     slug:{
      type:String,
      required:true,

     },
     description:{
      type:String,
      required:true,

     },
     content:{
      type:String,

     },
     image:{
      type:String,
      required:true,
     }

})
module.exports= mongoose.model("blogs",blogschemas);
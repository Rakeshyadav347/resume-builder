const mongoose=require('mongoose');

const authUserSchema=mongoose.Schema(
   {
    username:{
      type:String,
      required:true,
      unique:true,
    },
    password:{
       type:String,
      required:true,
      unique:true,
    }
   }
)

module.exports=mongoose.model("authAdmin",authUserSchema);
const mongoose=require('mongoose');

const authAdminSchema=mongoose.Schema(
   {
    email:{
      type:String,
      required:true,
      unique:true,
    },
    adminName:{
      type:String,
      required:true,
      unique:true,
    },
    password:{
       type:String,
      required:true,
      
    }
   }
)

module.exports=mongoose.model("authAdmin",authAdminSchema);
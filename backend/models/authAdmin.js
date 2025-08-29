const mongoose=require('mongoose');

const authAdminSchema=mongoose.Schema(
   {
    adminName:{
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

module.exports=mongoose.model("authAdmin",authAdminSchema);
const mongoose=require('mongoose');

const authUserSchema = mongoose.Schema(
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
    },
    name:{
      type:String,
      required:true,

    },
    contact:{
      type:Number,
      
    },
    email:{
      type:String,
      requird:true,
      unique:true,
      lowercase: true,
    },
    country: {
    type: String,
    default: "India",
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  experience: {
    type: Number, 
  },
  subscriptionExpiry: {
    type: Date, 
  },
  planType: {
    type: String,
    enum: ["Basic", "Pro", "Premium"],
    default: "Basic",
  },
  provider: {
    type: String, 
  },
  activityLog: [activityLogSchema], 
   }
)

const activityLogSchema = mongoose.Schema({
  dateTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  action: {
    type: String,
    enum: ["Logged in", "Edited Resume", "Upgraded to Pro Plan"],
    required: true,
  },
});

module.exports=mongoose.model("Userauth",authUserSchema);

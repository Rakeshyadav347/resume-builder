const mongoose = require("mongoose");


const activityLogSchema = new mongoose.Schema({
  dateTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  action: {
    type: String,
    enum: ["Logged in", "Edited Resume", "Upgraded to Pro Plan","Profile Updated"],
    required: true,
    default:"Logged in",
  },
});


const authUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: function () {
      return this.provider === "local"; 
    },
  },
  otp: String,
  otpExpires: Date,
  otpVerified: { type: Boolean, default: false },

  Image:{
     type:String,
  },

  googleId: {
    type: String,
    unique: true,
    sparse: true, 
  },

  username: {
    type: String,
    required: true,
  },

  contact: {
    type: Number,
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
    enum: ["local", "google"],
    default: "local",
  },

  activityLog: [activityLogSchema],
});

module.exports = mongoose.model("Userauth", authUserSchema);

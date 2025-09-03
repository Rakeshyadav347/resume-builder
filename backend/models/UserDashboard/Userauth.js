const mongoose = require("mongoose");


const activityLogSchema = new mongoose.Schema({
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


const authUserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    sparse: true, 
  },

  password: {
    type: String,
    required: function () {
      return this.provider === "local"; 
    },
  },

  Image:{
     type:String,
  },

  googleId: {
    type: String,
    unique: true,
    sparse: true, 
  },

  name: {
    type: String,
    required: true,
  },

  contact: {
    type: Number,
  },

  email: {
    type: String,
    required: true,
    unique: true,
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
    enum: ["local", "google"],
    default: "local",
  },

  activityLog: [activityLogSchema],
});

module.exports = mongoose.model("Userauth", authUserSchema);

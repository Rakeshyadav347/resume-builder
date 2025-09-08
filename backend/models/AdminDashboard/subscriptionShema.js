const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  subsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Userauth", 
    required: true,
  },
  subscriptionPlan: { 
    type: String, 
    enum: ["Free", "Basic", "Pro"], 
    required: true 
  },
  paymentId: { 
    type: String 
  } ,
  price: {
     type: Number,
      default: 0 
    },     
  duration: { 
    type: String, 
    enum: ["Monthly", "Yearly"], 
    required: true 
  },
  paymentDate: {
     type: Date,
     required: true 
    },
  renewDate: {
     type: Date,
     required: true 
    },
  activityLog: { 
    type: Date, 
    default: Date.now 
  }

});

module.exports = mongoose.model("Subscriptions", subscriptionSchema);

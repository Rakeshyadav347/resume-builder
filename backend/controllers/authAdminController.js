const authAdmin = require('../models/authAdmin');
const Subscriptions = require('../models/subscriptionShema');
const Feedback = require('../models/feedbackSchema');
const Resume = require('../models/templateSchema');
const blogs = require('../models/blogSchema');

exports.getDesiredAdmin = async(req , res) =>{
     const {adminName , password}= req.body;
     const adminUser = authAdmin.findone({adminName : adminName , password:password} );

      if (adminName  !== adminName.username) {
       return res.status(401).json({ message: "Invalid credentials" });
      }
      if(adminName  !== adminName.password){
      return res.status(401).json({ message: "Invalid credentials" });
      }
     res.json({id:adminUser._id,adminName :adminUser.adminName });
}

exports.createAdmin = async (req, res) => {
    
     const {adminName ,password} = req.body;
    
     const admin = new authAdmin({
        adminName: adminName,
        password: password,
      });
    
     await admin.save();
    
     res.status(201).json(user);
    
    }

exports.userSubscriptions = async (req , res) =>{
     const allsubscrip = await  Subscriptions.find({});
     if(allsubscrip > 0){
          res.status(201).json(allsubscrip);
     }
     else{
          res.status(401).json({message : "no list of user subscriptions"});
     }

}
exports.singleSubscription = async (req , res) =>{
     const userId=req.params.userId;
     const SUsubscrip = await  Subscriptions.findone({userId:userId});
     
          res.status(201).json(SUsubscrip);
     
}

exports.userFeedbacks = async (req , res) =>{
     const allFeedbacks = await  Feedback.find({});
     if(allFeedbacks > 0){
          res.status(201).json(allFeedbacks);
     }
     else{
          res.status(401).json({message : "no list of user feedbacks"});
     }

}

exports.SingleFeedback = async (req , res) =>{
          const userId=req.params.userId;
     const Ufeedback = await  Feedback.findone({userId:userId});
     
          res.status(201).json(Ufeedback);
     
}

exports.getAllTemplates = async(req, res) =>{
        const alltemp = await Resume.find({});
        if(alltemp > 0){
          res.status(201).json(alltemp);
     }
     else{
          res.status(401).json({message : "no list of Templates"});
     }
}

exports.getsingleTemplate = async(req, res) =>{
        const templateId=req.params.templateId;
        const alltemp = await Resume.findone({templateId:templateId});
          res.status(201).json(alltemp);
     

}

exports.getAllblogs = async (req ,res ) =>{
      const allblogs = await blogs.find({});
      if(allblogs > 0){
          res.status(201).json(allblogs);
     }
     else{
          res.status(401).json({message : "no list of blogs"});
     }
}

exports.getsingleblog = async(req, res) =>{
        const blogId=req.params.blogId;
        const singleblog = await blogs.findone({blogId:blogId});
          res.status(201).json(singleblog);
     

}
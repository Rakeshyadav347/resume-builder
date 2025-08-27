const authAdmin = require('../models/authAdmin');

exports.getDesiredAdmin = async(req , res) =>{
     const {username , password}= req.body;
     const adminUser = authAdmin.findone({username : username , password:password} );

      if (username !== adminUser.username) {
       return res.status(401).json({ message: "Invalid credentials" });
      }
      if(password !== adminUser.password){
      return res.status(401).json({ message: "Invalid credentials" });
      }
     res.json({id:adminUser._id,username:adminUser.username});
    }

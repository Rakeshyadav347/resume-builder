const Userauth = require('../models/Userauth');


exports.getDesiredNuser = async (req ,res) =>{
  const {username , password}= req.body;
       const NUser = await Userauth.findone({username : username , password:password} );
  
        if (username !== Userauth.username) {
         return res.status(401).json({ message: "Invalid credentials" });
        }
        if(password !== Userauth.password){
        return res.status(401).json({ message: "Invalid credentials" });
        }
       res.json({id:NUser._id,username:NUser.username});
}

exports.getAllUsers = async(req, res) =>{
       const AllUser = await Userauth.find({});
  
        if (AllUser<0) {
         return res.status(401).json({ message: "NO Users retrieved " });
        }
       
       res.status(200).json(NUser);
}

       
 exports.createUser = async (req, res) => {

  const {username ,password} = req.body;

  const user = new Userauth({
    username: username,
    password: password,
  });

  await user.save();

  res.status(201).json(user);

}


exports.updateUser = async(req ,res) =>{

    const {username ,password}= req.body;
    const user = Userauth({
      username : username ,
      password : password,
    })

    await user.save();
    res.status(204).json(user);

}

exports.deleteUser = (req , res) =>{
        const{id} =  req.body;
       const User =  Userauth.deleteOne({id : id});

       if(id !== User.id){
        return res.status(504).json({message :"User is already deleted"});
       }

       res.status(504).json(User);
}


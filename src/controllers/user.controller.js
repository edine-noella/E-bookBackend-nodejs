const User = require("../models/user.model")
const jwt = require("jsonwebtoken");

exports.AddUser = async (req, res) => {
    console.log(req.body)
    try {
      const user = new User({
       firstname: req.body.firstname,
       lastname: req.body.lastname,
       password: req.body.password,
       username: req.body.username,
       email: req.body.email,
      });
     
      await user.save();
      res.status(201).send(user);
 
    } catch (error) {
     res.status(500).send(error.toString());
    }
};

//signin user
exports.signinUser = async (req,res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(404).send("user doesn't exist")
        if(user.password !== req.body.password) return res.status(401).send("password is incorrect")

          // Create token
    // const token = jwt.sign(
    //     { user_id: user._id, username 
    //         :user.username },
    //     process.env.TOKEN_KEY,
    //     {
    //       expiresIn: "2h",
    //     }
    //   );

        res.send(user)
    } catch (error) {
        res.status(500).send(error.toString());
    }
}


exports.getAllUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
       res.status(500).send(error.toString());
    }
};

exports.getUserById = async (req,res) =>{
    try {
        const user = await User.findById({_id:req.params.userId});
        if(!user)return res.status(404).send();
        return res.send(user);
    } catch (error) {
        return res.status(500).send(error.toString())
    }
};

exports.getUserByUsername = async (req,res) => {
    try {
        const user = await User.findOne({username: req.params.username});
        if(!user)return res.status(404).send();

        return res.send(user);
    }catch(error){
        return res.status(500).send(error.toString())
    }
}

exports.UpdateUser = async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate({_id: req.params.userId},req.body);
        if(!user) return res.status(404).send();
        return res.send(req.body);
    } catch (error) {
        return res.status(500).send(error.toString())
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const user = await User.findByIdAndDelete({_id:req.params.userId});
        if(!user) return res.status(404).send();
        return res.send(user);
    } catch (error) {
        return res.status(500).send(error.toString())
    }
}

//logout user
// exports.logoutUser = async (req,res) => {
//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token !== req.token
//         })
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error.toString())
//     }
// }
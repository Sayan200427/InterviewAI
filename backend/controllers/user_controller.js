const User = require("../models/user_model");

const getCurrentUser = async (req , res) =>{
    try{
        const userId = req.userId;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message : "User does not found"})

        }

         return res.status(200).json(user);
    }
    catch(err){
        return res.status(500).json({message : `Failed to get current User ${err}`});
    }
}

module.exports = getCurrentUser;
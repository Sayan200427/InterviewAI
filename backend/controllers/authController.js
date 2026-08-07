const User = require("../models/user_model");
const genToken = require("../config/token");

const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                name,
                email
            });
        }

        const token = await genToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 604800 * 1000
        });

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({
            message: `Google auth error: ${err.message}`
        });
    }
};

const logOut = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        });

        return res.status(200).json({
            message: "Logout Successfully"
        });
    } catch (err) {
        return res.status(500).json({
            message: `Logout error: ${err.message}`
        });
    }
};

module.exports = { googleAuth,  logOut };

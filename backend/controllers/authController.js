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
        const isProduction = process.env.NODE_ENV === "production";

        res.cookie("token", token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "none" : "lax",
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
        const isProduction = process.env.NODE_ENV === "production";

        res.clearCookie("token", {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "none" : "lax"
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

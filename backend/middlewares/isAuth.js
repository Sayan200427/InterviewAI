const jwt = require("jsonwebtoken");


const isAuth = async (req , res , next)=>{
    try{
        // Debug: log cookies and origin to help troubleshoot missing token in production
        console.log('isAuth - cookies:', req.cookies);
        console.log('isAuth - request origin:', req.get('origin') || req.headers.referer || req.hostname);

        let { token } = req.cookies;

        if (!token) {
            const rawAuth = req.headers.authorization || req.headers.Authorization;
            if (rawAuth && rawAuth.startsWith("Bearer ")) {
                token = rawAuth.split(" ")[1];
            }
        }

        if (!token) {
            return res.status(400).json({ message: "user does not have a token" });
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

        if(!verifyToken){
            return res.status(400).json({message : "user does not have a valid token"})
        }

        req.userId = verifyToken.userId;

        next()
    }
    catch(err){
        return res.status(500).json({message : `isAuth error : ${err}`});
    }
}

module.exports = isAuth;
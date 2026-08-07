const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadDir = path.join(process.cwd(), "public");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function(req , file , cb){
        cb(null , uploadDir)
    },
    filename : function(req , file, cb){
        const filename = Date.now()+"-"+file.originalname;
        cb(null , filename);
    }
})

const upload = multer({
    storage,
    limits : {fileSize : 5 *1024*1024}, //5MB limit
});

module.exports = { upload };

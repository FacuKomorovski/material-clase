const path = require ("path");
const multer = require ("multer");
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let avatar = path.join(__dirname, "../../public/images/avatars")
        cb(null, avatar);
    },
    filename: function(req,file,cb){        
        let imageName = "image-" + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
});
const uploadFile = multer({storage: diskStorage});

module.exports= uploadFile;

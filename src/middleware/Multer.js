const multer = require("multer");
const helper = require("../helper/index");
const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    console.log(file.mimetype);
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      callback(null, "./uploads/");
    } else {
      return callback(
        new Error("Invalid image format, only jpeg / png are allowed")
      );
    }
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

let upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 },
}).single("img");
const uploadFilter = (request, response, next) => {
  upload(request, response, function (error) {
    if (error instanceof multer.MulterError) {
      return helper.response(response, 400, error.message);
    } else if (error) {
      return helper.response(response, 400, error.message);
    }
    next();
  });
};
module.exports = uploadFilter;

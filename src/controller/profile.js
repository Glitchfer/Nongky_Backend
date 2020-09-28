const { patchProfile, patchProfileUser2 } = require("../model/profile");
const {
  checkUser,
  checkUserName,
  checkUserPhone,
  getUser,
  getUserById,
} = require("../model/user");
const helper = require("../helper/index");
const redis = require("redis");
const client = redis.createClient();
let fs = require("fs");

module.exports = {
  patchProfile: async (request, response) => {
    const { id } = request.params;
    const { user_full_name, user_phone, user_name, user_bio } = request.body;
    const image = request.file === undefined ? "" : request.file.filename;
    const checkId = await getUserById(id);
    const setData = {
      user_image: image === "" ? checkId[0].user_image : image,
      user_full_name:
        user_full_name === "" ? checkId[0].user_full_name : user_full_name,
      user_phone: user_phone === "" ? checkId[0].user_phone : user_phone,
      user_name: user_name === "" ? checkId[0].user_name : user_name,
      user_bio: user_bio === "" ? checkId[0].user_bio : user_bio,
      user_updated: new Date(),
    };
    try {
      if (checkId[0].user_image !== "") {
        fs.unlink(`./uploads/${checkId[0].user_image}`, function (err) {
          if (err) throw err;
          console.log("File img deleted! ready to patch");
        });
        if (checkId.length > 0) {
          const result = await patchProfile(setData, id);
          const result2 = await patchProfileUser2(setData, id);
          return helper.response(response, 201, "Profile Updated", result);
        } else {
          return helper.response(response, 404, `User By Id: ${id} Not Found`);
        }
      } else {
        if (checkId.length > 0) {
          const result = await patchProfile(setData, id);
          const result2 = await patchProfileUser2(setData, id);
          return helper.response(response, 201, "Profile Updated", result);
        } else {
          return helper.response(response, 404, `User By Id: ${id} Not Found`);
        }
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};

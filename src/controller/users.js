const {
  postLogin,
  registerUser,
  registerUser2,
  checkUser,
  checkUserName,
  checkUserPhone,
  getUser,
  getUserById,
  patchUser,
  patchLogout,
  resetPasswordUser,
  patchLocation,
} = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helper = require("../helper/index");
// const redis = require("redis");
// const client = redis.createClient();
const fs = require("fs");

module.exports = {
  loginUser: async (request, response) => {
    try {
      const { user_email, user_password } = request.body;
      const checkDataUsers = await checkUser(user_email);
      console.log(checkDataUsers);
      if (checkDataUsers.length >= 1) {
        const checkPassword = bcrypt.compareSync(
          user_password,
          checkDataUsers[0].user_password
        );
        if (checkPassword === true) {
          const {
            user_id,
            user_email,
            user_name,
            user_phone,
            user_image,
            user_address,
            user_lat,
            user_lng,
            user_bio,
            user_account_status,
            user_full_name,
          } = checkDataUsers[0];
          let payload = {
            user_id,
            user_email,
            user_name,
            user_phone,
            user_image,
            user_address,
            user_lat,
            user_lng,
            user_bio,
            user_account_status,
            user_full_name,
          };
          const token = jwt.sign(payload, "RAHASIA", { expiresIn: "5h" });
          payload = { ...payload, token };

          const loginInfo = {
            user_id: checkDataUsers[0].user_id,
            name: checkDataUsers[0].user_name,
            email: checkDataUsers[0].user_email,
            phone: checkDataUsers[0].user_phone,
            login: new Date(),
          };
          const result = await postLogin(loginInfo);
          console.log(result);
          const setData2 = {
            user_login_status: 1,
          };
          const result2 = await patchUser(setData2, checkDataUsers[0].user_id);
          return helper.response(
            response,
            200,
            "Login success",
            payload,
            result
          );
        } else {
          return helper.response(response, 400, "Invalid password");
        }
      } else {
        return helper.response(response, 400, "Email not registered");
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  registerUser: async (request, response) => {
    const { register } = request.params;
    const { user_name, user_email, user_phone, user_password } = request.body;
    const requirement = (user_password) => {
      let decimal =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      if (user_password.match(decimal)) {
        return true;
      } else {
        return false;
      }
    };
    const salt = bcrypt.genSaltSync(10);
    const encryptPassword = bcrypt.hashSync(user_password, salt);
    const setData = {
      user_name,
      user_email,
      user_phone,
      user_password: encryptPassword,
      user_login_status: 0,
      user_account_status: 0,
      user_created: new Date(),
    };
    try {
      const checkPassword = bcrypt.compareSync(
        user_password,
        "$2b$10$N0X3QRtZ7vMgZLVjHKKvrunzJJ4HILSnopuziHM517ewSnOr3Ugx6"
      );
      if (
        user_email === "" ||
        user_name === "" ||
        user_phone === "" ||
        checkPassword === true
      ) {
        return helper.response(
          response,
          400,
          "Invalid Input, All Of Data Must Be Filled"
        );
      } else {
        if (requirement(user_password) === false) {
          return helper.response(
            response,
            400,
            `Password must be at least has minimum 8 character length, with one lowercase, one uppercase, one number and one special character`
          );
        } else {
          const checkPhone = await checkUserPhone(user_phone);
          if (checkPhone.length > 0) {
            return helper.response(
              response,
              400,
              `Phone number already registered`
            );
          } else {
            const checkDataUsers = await checkUser(user_email);
            if (checkDataUsers.length < 1) {
              const result = await registerUser(setData);
              const result2 = await registerUser2(setData);
              return helper.response(response, 200, "Register Success", result);
            } else {
              return helper.response(response, 400, `Email already registered`);
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  activationUser: async (request, response) => {
    try {
      const { id } = request.params;
      const { user_password, user_account_status } = request.body;
      const requirement = (user_password) => {
        let decimal =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (user_password.match(decimal)) {
          return true;
        } else {
          return false;
        }
      };
      const salt = bcrypt.genSaltSync(10);
      const encryptPassword = bcrypt.hashSync(user_password, salt);
      const checkId = await getUserById(id);
      if (user_password.length > 0 && requirement(user_password) === false) {
        return helper.response(
          response,
          400,
          `Password must be at least has minimum 8 character length, with one lowercase, one uppercase, one number and one special character`
        );
      } else {
        if (user_account_status === "") {
          return helper.response(
            response,
            404,
            `User account status must be filled`
          );
        } else {
          if (checkId.length > 0) {
            const setData = {
              user_password:
                user_password.length < 1
                  ? checkId[0].user_password
                  : encryptPassword,
              user_account_status,
              user_updated: new Date(),
            };
            const result = await patchUser(setData, id);
            return helper.response(response, 201, "User Updated", result);
          } else {
            return helper.response(
              response,
              404,
              `User By Id: ${id} Not Found`
            );
          }
        }
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  patchLogout: async (request, response) => {
    let { activity_id, user_id } = request.query;
    const setData = {
      logout: new Date(),
    };
    const setData2 = {
      user_login_status: 0,
    };
    const checkId = await getUserById(user_id);
    try {
      if (checkId.length > 0) {
        const result = await patchLogout(setData, activity_id);
        const result2 = await patchUser(setData2, user_id);
        return helper.response(
          response,
          201,
          "Logout Success",
          result,
          result2
        );
      } else {
        return helper.response(
          response,
          404,
          `User By Id: ${user_id} Not Found`
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getUser: async (request, response) => {
    try {
      const result = await getUser();
      // client.setex("userall", 120, JSON.stringify(result));
      return helper.response(response, 200, "Get Success", result);
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getUserById: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getUserById(id);
      if (result.length > 0) {
        // client.setex(`userbyid:${id}`, 120, JSON.stringify(result));
        return helper.response(response, 200, "Get User By Id Success", result);
      } else {
        return helper.response(response, 404, `User By Id: ${id} Not Found`);
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getUserByName: async (request, response) => {
    try {
      const { name } = request.params;
      const { user_name } = request.body;
      const result = await checkUserName(user_name);
      if (result.length > 0) {
        // client.setex(`userbyname:${user_name}`, 120, JSON.stringify(result));
        return helper.response(
          response,
          200,
          "Get User By Name Success",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `User By Name: ${user_name} Not Found`
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getUserByEmail: async (request, response) => {
    try {
      const { email } = request.params;
      const { user_email } = request.body;
      const result = await checkUser(user_email);
      if (result.length > 0) {
        // client.setex(`userbyemail:${user_email}`, 120, JSON.stringify(result));
        return helper.response(
          response,
          200,
          "Get User By Email Success",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `User By Email: ${user_email} Not Found`
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getUserByPhone: async (request, response) => {
    try {
      const { phone } = request.params;
      const { user_phone } = request.body;
      const result = await checkUserPhone(user_phone);
      if (result.length > 0) {
        // client.setex(`userbyphone:${user_phone}`, 120, JSON.stringify(result));
        return helper.response(
          response,
          200,
          "Get User By Phone Success",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `User By Phone: ${user_phone} Not Found`
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  resetPassword: async (request, response) => {
    const { email } = request.params;
    const { user_password, re_password } = request.body;

    const salt = bcrypt.genSaltSync(10);
    const password_encrypt = bcrypt.hashSync(user_password, salt);

    const setData = {
      user_password: password_encrypt,
    };
    try {
      if (user_password.length < 8) {
        return helper.response(
          response,
          400,
          "Password must up to 8 character"
        );
      } else if (user_password != re_password) {
        return helper.response(response, 400, "Password doesn't match");
      } else {
        const result = await resetPasswordUser(setData, email);

        return helper.response(response, 201, "New Password Added", result);
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  patchLocation: async (request, response) => {
    const { location } = request.params;
    const { user_lat, user_lng, id } = request.body;
    const setData = {
      user_lat,
      user_lng,
    };
    const checkId = await getUserById(id);
    try {
      if (checkId.length > 0) {
        const result = await patchUser(setData, id);
        const result2 = await patchLocation(setData, id);
        return helper.response(
          response,
          201,
          "location updated",
          result,
          result2
        );
      } else {
        return helper.response(response, 404, `User By Id: ${id} Not Found`);
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};

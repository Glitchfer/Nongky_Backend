const {
  postLogin,
  registerUser,
  checkUser,
  checkUserName,
  getUserById,
  patchUser,
  patchLogout,
} = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helper = require("../helper/index");
const redis = require("redis");
const client = redis.createClient();
const fs = require("fs");

module.exports = {
  loginUser: async (request, response) => {
    try {
      const { user_email, user_password } = request.body;
      const checkDataUsers = await checkUser(user_email);
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
            user_role,
            user_status,
          } = checkDataUsers[0];
          let payload = {
            user_id,
            user_email,
            user_name,
            user_role,
            user_status,
          };
          const token = jwt.sign(payload, "RAHASIA", { expiresIn: "1h" });
          payload = { ...payload, token };
          console.log(payload);

          const loginInfo = {
            user_id: checkDataUsers[0].user_id,
            name: checkDataUsers[0].user_name,
            role: checkDataUsers[0].user_role,
            login: new Date(),
          };
          const result = await postLogin(loginInfo);
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
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  registerUser: async (request, response) => {
    const { register } = request.params;
    const { user_email, user_password, user_role, user_name } = request.body;
    const requirement = (user_password) => {
      let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      if (user_password.match(decimal)) {
        return true;
      } else {
        return false;
      }
    };
    const salt = bcrypt.genSaltSync(10);
    const encryptPassword = bcrypt.hashSync(user_password, salt);
    const setData = {
      user_email,
      user_password: encryptPassword,
      user_name,
      user_role: user_role === "#admin" ? 1 : 2,
      user_status: user_role === "#admin" ? 1 : 0,
      user_created_at: new Date(),
    };
    try {
      const checkPassword = bcrypt.compareSync(
        user_password,
        "$2b$10$N0X3QRtZ7vMgZLVjHKKvrunzJJ4HILSnopuziHM517ewSnOr3Ugx6"
      );
      if (user_email === "" || user_name === "" || checkPassword === true) {
        return helper.response(
          response,
          400,
          "Invalid Input, All Of The Data Must Be Filled"
        );
      } else {
        if (requirement(user_password) === false) {
          return helper.response(
            response,
            400,
            `Password must be at least has minimum 8 character length, with one lowercase, one uppercase, one number and one special character`
          );
        } else {
          const checkName = await checkUserName(user_name);
          if (checkName.length > 0) {
            return helper.response(
              response,
              400,
              `Same name detected, please use other name`
            );
          } else {
            const checkDataUsers = await checkUser(user_email);
            if (checkDataUsers.length < 1) {
              const result = await registerUser(setData);
              return helper.response(response, 200, "Register Success", result);
            } else {
              return helper.response(response, 400, `Email already registered`);
            }
          }
        }
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
      console.log(error);
    }
  },
  patchUser: async (request, response) => {
    try {
      const { id } = request.params;
      const { user_password, user_status } = request.body;
      const requirement = (user_password) => {
        let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
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
        if (user_status === "") {
          return helper.response(response, 404, `User status must be filled`);
        } else {
          if (checkId.length > 0) {
            const setData = {
              user_password:
                user_password.length < 1
                  ? checkId[0].user_password
                  : encryptPassword,
              user_status,
              user_updated_at: new Date(),
            };
            console.log(user_password);
            console.log(setData);
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
      return helper.response(response, 400, "Bad Request", error);
      console.log(error);
    }
  },
  patchLogout: async (request, response) => {
    let { activity_id, user_id } = request.query;
    const setData = {
      logout: new Date(),
    };
    const checkId = await getUserById(user_id);
    console.log(checkId);
    try {
      if (checkId.length > 0) {
        const result = await patchLogout(setData, activity_id);
        return helper.response(response, 201, "Logout Success", result);
      } else {
        return helper.response(
          response,
          404,
          `User By Id: ${user_id} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
      console.log(error);
    }
  },
};

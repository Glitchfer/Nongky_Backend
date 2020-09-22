const bcrypt = require("bcrypt");

const helper = require("../helper/index");

const { getUserByid } = require("../model/user");

const redis = require("redis");
const client = redis.createClient();
const fs = require("fs");

module.exports = {
  getUserid: async (request, response) => {
    try {
      const { id } = request.params;

      const user = await getUserByid(id);
      if (user.length > 0) {
        console.log("aaa");
      } else {
        return helper.response(response, 200, `data user id ${id} not found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};

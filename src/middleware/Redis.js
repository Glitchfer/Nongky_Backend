const redis = require("redis");
const client = redis.createClient();
const helper = require("../helper/index");

module.exports = {
  getUserRedis: (request, response, next) => {
    client.get("userall", (error, result) => {
      if (!error && result != null) {
        return helper.response(
          response,
          200,
          "Get Success",
          JSON.parse(result)
        );
      } else {
        next();
      }
    });
  },
  getUserByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`userbyid:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          response,
          200,
          "Get User By Id Success",
          JSON.parse(result)
        );
      } else {
        next();
      }
    });
  },
  getUserByNameRedis: (request, response, next) => {
    const { name } = request.params;
    const { user_name } = request.body;
    client.get(`userbyname:${user_name}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          response,
          200,
          "Get User By Name Success",
          JSON.parse(result)
        );
      } else {
        next();
      }
    });
  },
  getUserByEmailRedis: (request, response, next) => {
    const { email } = request.params;
    const { user_email } = request.body;
    client.get(`userbyemail:${user_email}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          response,
          200,
          "Get User By Email Success",
          JSON.parse(result)
        );
      } else {
        next();
      }
    });
  },
  getUserByPhoneRedis: (request, response, next) => {
    const { phone } = request.params;
    const { user_phone } = request.body;
    client.get(`userbyphone:${user_phone}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          response,
          200,
          "Get User By Phone Success",
          JSON.parse(result)
        );
      } else {
        next();
      }
    });
  },
  clearDataUserRedis: (request, response, next) => {
    client.keys("user*", (error, keys) => {
      if (keys.length > 0) {
        keys.forEach((value) => {
          client.del(value);
        });
      }
      next();
    });
    //-------- Untuk mendelete semua data redis sekaligus ------------
    // client.flushall((error, result) => {
    // });
    // next();
    // ---------------------------------------------------------------
  },
};

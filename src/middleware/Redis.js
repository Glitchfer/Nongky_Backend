const redis = require("redis");
const client = redis.createClient();
const helper = require("../helper/index");

module.exports = {
  getUserRedis: (request, response, next) => {
    client.get("userall", (error, result) => {
      if (!error && result != null) {
        console.log(`Data user tersedia di dalam redis`);
        return helper.response(
          response,
          200,
          "Get Success",
          JSON.parse(result)
        );
      } else {
        console.log(`Data user belum tersedia di dalam redis`);
        next();
      }
    });
  },
  getUserByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`userbyid:${id}`, (error, result) => {
      if (!error && result != null) {
        console.log(`Data dengan user id: ${id} tersedia di dalam redis`);
        return helper.response(
          response,
          200,
          "Get User By Id Success",
          JSON.parse(result)
        );
      } else {
        console.log(`Data dengan user id: ${id} belum tersedia di dalam redis`);
        next();
      }
    });
  },
  getUserByNameRedis: (request, response, next) => {
    const { name } = request.params;
    const { user_name } = request.body;
    client.get(`userbyname:${user_name}`, (error, result) => {
      if (!error && result != null) {
        console.log(
          `Data dengan user name: ${user_name} tersedia di dalam redis`
        );
        return helper.response(
          response,
          200,
          "Get User By Name Success",
          JSON.parse(result)
        );
      } else {
        console.log(
          `Data dengan user name: ${user_name} belum tersedia di dalam redis`
        );
        next();
      }
    });
  },
  getUserByEmailRedis: (request, response, next) => {
    const { email } = request.params;
    const { user_email } = request.body;
    client.get(`userbyemail:${user_email}`, (error, result) => {
      if (!error && result != null) {
        console.log(
          `Data dengan user email: ${user_email} tersedia di dalam redis`
        );
        return helper.response(
          response,
          200,
          "Get User By Email Success",
          JSON.parse(result)
        );
      } else {
        console.log(
          `Data dengan user email: ${user_email} belum tersedia di dalam redis`
        );
        next();
      }
    });
  },
  getUserByPhoneRedis: (request, response, next) => {
    const { phone } = request.params;
    const { user_phone } = request.body;
    client.get(`userbyphone:${user_phone}`, (error, result) => {
      if (!error && result != null) {
        console.log(
          `Data dengan user phone: ${user_phone} tersedia di dalam redis`
        );
        return helper.response(
          response,
          200,
          "Get User By Phone Success",
          JSON.parse(result)
        );
      } else {
        console.log(
          `Data dengan user phone: ${user_phone} belum tersedia di dalam redis`
        );
        next();
      }
    });
  },
  clearDataUserRedis: (request, response, next) => {
    client.keys("user*", (error, keys) => {
      if (keys.length > 0) {
        keys.forEach((value) => {
          client.del(value);
          console.log(`semua data dengan key user terhapus dari redis`);
        });
      }
      next();
    });
    //-------- Untuk mendelete semua data redis sekaligus ------------
    // client.flushall((error, result) => {
    //   console.log("Data didalam redis terhapus");
    //   console.log(result);
    // });
    // next();
    // ---------------------------------------------------------------
  },
};

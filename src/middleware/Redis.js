const redis = require("redis");
const client = redis.createClient();
const helper = require("../helper/index");
const { request, response } = require("express");

module.exports = {
  getUserByIdRedis: (request, response, next) => {},

  clearDataRedis: (request, response, next) => {},
};

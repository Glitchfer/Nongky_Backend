const route = require("express").Router();
const users = require("./routes/users");
routes.use("/users", users);
module.exports = route;

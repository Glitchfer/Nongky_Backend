const routes = require("express").Router();
const users = require("./routes/users");
const friend = require("./routes/friend");
routes.use("/users", users);
routes.use("/friend", friend);
module.exports = routes;

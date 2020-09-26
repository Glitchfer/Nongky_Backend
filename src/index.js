const routes = require("express").Router();
const users = require("./routes/users");
const friend = require("./routes/friend");
const chat = require("./routes/chat");
routes.use("/users", users);
routes.use("/friend", friend);
routes.use("/chat", chat);
module.exports = routes;

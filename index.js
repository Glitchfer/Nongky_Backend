require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routerNavigation = require("./src");
const socket = require("socket.io");
const app = express();

app.use(cors());
const http = require("http");
const server = http.createServer(app);
const io = socket(server);

io.on("connection", (socket) => {
  console.log("socket.io sudah terhubung..");

  socket.on("setRoom", (data) => {
    // socket.room_id = data.room_id;
    socket.join(data.room_id);
  });

  // socket.on("changeRoom", (data) => {
  //   socket.leave(socket.room_id);
  //   socket.join(data.newroom);
  // });

  socket.on("privateRoom", (data) => {
    // socket.join(data.room_id);
    io.to(data.room_id).emit("chat", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.to(data.room).emit("typingMessage", data);
    socket.join(data.room);
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("uploads"));

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/", routerNavigation);

app.get("*", (request, response) => {
  response.status(404).send("Path Not Found !");
});

server.listen(process.env.PORT, process.env.IP, () => {
  console.log(
    `Express app is listening on host: ${process.env.IP} and port: ${process.env.PORT}`
  );
});

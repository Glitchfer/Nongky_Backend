const jwt = require("jsonwebtoken");
const helper = require("../helper/index");

module.exports = {
  authorization: (request, response, next) => {
    let token = request.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      jwt.verify(token, "RAHASIA", (error, result) => {
        if (
          (error && error.name === "JsonWebTokenError") ||
          (error && error.name === "TokenExpiredError")
        ) {
          return helper.response(response, 400, error.message);
        } else {
          if (result.user_status !== 0) {
            request.token = result;
            next();
          } else {
            return helper.response(
              response,
              400,
              "Invalid action, status inactive"
            );
          }
        }
      });
    } else {
      return helper.response(response, 400, "Invalid token, Login required");
    }
  },
};

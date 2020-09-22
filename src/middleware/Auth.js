const jwt = require("jsonwebtoken");
const helper = require("../helper/index.js");

module.exports = {
    authUser: (request, response, next) => {
        let token = request.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            jwt.verify(token, "SECRETS", (error, result) => {
                if (
                    (error && error.name === "jsonwebTokenError") ||
                    (error && error.name === "TokenExpiredError")
                ) {
                    return helper.response(response, 403, error.message);
                } else {
                    request.token = result;
                    next();
                }
            });
        } else {
            return helper.response(response, 400, "Please Login First !");
        }
    },
    otorisasi: (request, response, next) => {
        let { role_id } = request.body
        if (role_id === "1") { // Pekerja
            return helper.response(response, 403, "You didnt have permission to access this page !");
        } else { // Bukan pekerja
            next();
        }
    }
}
const connection = require("../config/mysql");
module.exports = {
  getCollectionByUserId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM collection WHERE user_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getCollection: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM collection WHERE collection_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  postCollection: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO collection SET ?",
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              collection_id: result.insertId,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  deleteCollection: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM collection WHERE collection_id = ?",
        id,
        (error, result) => {
          if (!error) {
            const newResult = {
              id: id,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
};

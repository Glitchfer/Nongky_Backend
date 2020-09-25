const connection = require("../config/mysql");
module.exports = {
  getFriendList: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        // "SELECT * FROM friend WHERE response_status = 1 && user_id = ?",
        `SELECT friend.id, friend.user_id, friend.friend_id, friend.response_status, user.user_email, user.user_name, user.user_phone, user.user_image, user.user_address, user.user_lat, user.user_lng, user.user_bio, user.user_login_status, user.user_type FROM friend JOIN user ON friend.friend_id = user.user_id WHERE response_status = 1 && friend.user_id = ?`,
        [id],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  checkFriendConnection: (id, sender) => {
    return new Promise((resolve, reject) => {
      connection.query(
        // "SELECT * FROM friend WHERE response_status = 1 && user_id = ?",
        `SELECT friend.id, friend.user_id, friend.friend_id, friend.response_status, user.user_email, user.user_name, user.user_phone, user.user_image, user.user_address, user.user_lat, user.user_lng, user.user_bio, user.user_login_status, user.user_type FROM friend JOIN user ON friend.friend_id = user.user_id WHERE response_status = 1 && friend.user_id = ? && friend.friend_id = ?`,
        [id, sender],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  checkInvitationStatus: (id, friend_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT friend.id, friend.user_id, friend.friend_id, friend.response_status, user.user_email, user.user_name, user.user_phone, user.user_image, user.user_address, user.user_lat, user.user_lng, user.user_bio, user.user_login_status, user.user_type FROM friend JOIN user ON friend.friend_id = user.user_id WHERE response_status = 2 && friend.user_id = ? && friend.friend_id = ?`,
        [id, friend_id],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getRequestList: (user_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        // `SELECT * FROM invite WHERE user_id = ? && invite_status = 0`
        `SELECT invite.invite_id, invite.user_id, invite.sender_id, invite.invite_status, invite.response_status, user.user_email, user.user_name, user.user_phone, user.user_image, user.user_address, user.user_lat, user.user_lng, user.user_bio, user.user_login_status, user.user_type FROM invite JOIN user ON invite.sender_id = user.user_id WHERE invite.user_id = ? && invite.invite_status = 0`,
        user_id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  postFriend: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO friend SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = {
            id: result.insertId,
            ...setData,
          };
          resolve(newResult);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  postInvitation: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO invite SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = {
            id: result.insertId,
            ...setData,
          };
          resolve(newResult);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  postNewFriend: (setData, user_id, sender_id) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO friend SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = {
            id: result.insertId,
            ...setData,
          };
          delete newResult.user_password;
          resolve(newResult);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  patchInvitation: (setData, user_id, sender_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE invite SET ? WHERE user_id = ? && sender_id = ?`,
        [setData, user_id, sender_id],
        (error, result) => {
          if (!error) {
            const newResult = {
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
  patchFriend: (setData, user_id, sender_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE friend SET ? WHERE user_id = ? && friend_id = ?`,
        [setData, sender_id, user_id],
        (error, result) => {
          if (!error) {
            const newResult = {
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
};

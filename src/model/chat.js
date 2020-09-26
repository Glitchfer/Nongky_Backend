const connection = require("../config/mysql");
module.exports = {
  getChatList: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT chat_list.table_id, chat_list.sender_id, chat_list.friend_id,  chat_list.room_id, user.user_id AS friend_contact_id, user.user_email, user.user_name, user.user_phone, user.user_image, user.user_address, user.user_lat, user.user_lng, user.user_bio, user.user_login_status FROM chat_list JOIN user ON IF(chat_list.sender_id = ?, chat_list.friend_id = user.user_id, chat_list.sender_id = user.user_id) WHERE chat_list.sender_id = ?  || chat_list.friend_id = ? `,
        [id, id, id],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  postChatList: (setData, user_id, sender_id) => {
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
  patchChatList: (setData, user_id, sender_id) => {
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

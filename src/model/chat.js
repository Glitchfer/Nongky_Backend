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
  getChatHistory: (user_id, friend_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT chat.room_id, chat.sender_id, user.user_image AS sender_image, user.user_name AS sender_name, user.user_email AS sender_email, chat.receiver_id, user2.user_image AS receiver_image, user2.user_name AS receiver_name, user2.user_email AS receiver_email, chat.message, chat.chat_status FROM chat JOIN user ON chat.sender_id = user.user_id JOIN user2 ON chat.receiver_id = user2.user_id WHERE (chat.sender_id = ${user_id} && chat.receiver_id = ${friend_id}) || (chat.sender_id = ${friend_id} && chat.receiver_id = ${user_id})`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getChatHistoryLanjutan: (room_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT chat.table_id, chat.room_id, chat.sender_id, user.user_image AS sender_image, user.user_name AS sender_name, user.user_email AS sender_email, chat.receiver_id, user2.user_image AS receiver_image, user2.user_name AS receiver_name, user2.user_email AS receiver_email, chat.message, chat.created, chat.chat_status FROM chat JOIN user ON chat.sender_id = user.user_id JOIN user2 ON chat.receiver_id = user2.user_id WHERE chat.room_id = ? ORDER BY chat.table_id ASC`,
        room_id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  postChatList: (setData) => {
    console.log(setData);
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO chat_list SET ?",
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              table_id: result.insertId,
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
  postChat: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO chat SET ?", setData, (error, result) => {
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

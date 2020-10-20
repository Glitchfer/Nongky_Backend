const connection = require("../config/mysql");
module.exports = {
  getChatById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * From chat where table_id = ?`,
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  // getChatList: (id) => {
  //   return new Promise((resolve, reject) => {
  //     connection.query(
  //       `SELECT chat_list.table_id, chat_list.sender_id, chat_list.friend_id, chat_list.room_id, user.user_id AS friend_contact_id, user.user_email, user.user_name, user.user_phone, user.user_image, user.user_address, user.user_lat, user.user_lng, user.user_bio, user.user_login_status, user.user_full_name, chat.message, DATE_FORMAT(chat.created, '%d/%m %H:%i') as created, chat.chat_status, chat.tables_id FROM chat_list JOIN user ON chat_list.sender_id = user.user_id JOIN ( SELECT table_id, room_id, message, created, chat_status, max(chat.table_id) as tables_id FROM chat GROUP BY chat.room_id ORDER BY tables_id DESC ) chat ON chat_list.room_id = chat.room_id WHERE chat_list.friend_id = ?`,
  //       id,
  //       (error, result) => {
  //         !error ? resolve(result) : reject(new Error(error));
  //       }
  //     );
  //   });
  // },
  getChatList: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT chat_list.table_id, chat_list.sender_id, chat_list.friend_id,  chat_list.room_id, user.user_id AS friend_contact_id, user.user_email, user.user_name, user.user_phone, user.user_image, user.user_address, user.user_lat, user.user_lng, user.user_bio, user.user_login_status, user.user_full_name FROM chat_list JOIN user ON IF(chat_list.sender_id = ?, chat_list.friend_id = user.user_id, chat_list.sender_id = user.user_id) WHERE chat_list.sender_id = ?  || chat_list.friend_id = ?`,
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
  getLastChat: (room_id, user_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT chat.table_id, chat.room_id, chat.sender_id, chat.receiver_id, chat.message, chat.chat_status, DATE_FORMAT(chat.created, '%d/%m %H:%i') as created FROM chat JOIN user ON chat.sender_id = user.user_id JOIN user2 ON chat.receiver_id = user2.user_id WHERE chat.room_id = ? && chat.receiver_id = ? ORDER BY chat.table_id DESC`,
        [room_id, user_id],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getUnreadChat: (room_id, user_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT chat.table_id, chat.room_id, chat.sender_id, chat.receiver_id, chat.message, chat.chat_status, DATE_FORMAT(chat.created, '%d/%m %H:%i') as created FROM chat JOIN user ON chat.sender_id = user.user_id JOIN user2 ON chat.receiver_id = user2.user_id WHERE chat.room_id = ? && chat.receiver_id = ? && chat.chat_status = 0 ORDER BY chat.table_id DESC`,
        [room_id, user_id],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getUnreadCount: (room_id, user_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) as unread_count FROM chat WHERE chat.room_id = ? && chat.receiver_id = ? && chat.chat_status = 0`,
        [room_id, user_id],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  postChatList: (setData) => {
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
  patchChatStatus: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE chat SET ? WHERE table_id = ?`,
        [setData, id],
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
  getDataAndLastChat: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT chat_list.table_id, chat_list.sender_id, chat_list.friend_id,  chat_list.room_id, user.user_id AS friend_contact_id, user.user_email, user.user_name, user.user_phone, user.user_image, user.user_address, user.user_lat, user.user_lng, user.user_bio, user.user_login_status, user.user_full_name, chat.sender_id, chat.receiver_id, chat.message, DATE_FORMAT(chat.created, '%d/%m %H:%i') as created, chat.chat_status, chat.table_id FROM chat_list JOIN user ON IF(chat_list.sender_id = ?, chat_list.friend_id = user.user_id, chat_list.sender_id = user.user_id) JOIN chat ON IF(chat_list.sender_id = ?, chat_list.friend_id = chat.sender_id && chat_list.sender_id = chat.receiver_id, chat_list.sender_id = chat.sender_id && chat_list.friend_id = chat.receiver_id) WHERE (chat_list.sender_id = ?  || chat_list.friend_id = ?) && chat.table_id IN (SELECT MAX(chat.table_id) FROM chat GROUP BY chat.table_id DESC) GROUP BY chat_list.room_id ORDER BY chat_list.sender_id ASC`,
        [id, id, id, id],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};

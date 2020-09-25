const {
  getFriendList,
  getRequestList,
  patchInvitation,
  patchFriend,
  postNewFriend,
  postFriend,
  postInvitation,
  checkInvitationStatus,
  checkFriendConnection,
} = require("../model/friend");
const helper = require("../helper/index");
module.exports = {
  //   registerUser: async (request, response) => {
  //     const { register } = request.params;
  //     const { user_name, user_email, user_phone, user_password } = request.body;
  //     const requirement = (user_password) => {
  //       let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  //       if (user_password.match(decimal)) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     };
  //     const salt = bcrypt.genSaltSync(10);
  //     const encryptPassword = bcrypt.hashSync(user_password, salt);
  //     const setData = {
  //       user_name,
  //       user_email,
  //       user_phone,
  //       user_password: encryptPassword,
  //       user_login_status: 0,
  //       user_account_status: 0,
  //       user_created: new Date(),
  //     };
  //     console.log(setData);
  //     try {
  //       const checkPassword = bcrypt.compareSync(
  //         user_password,
  //         "$2b$10$N0X3QRtZ7vMgZLVjHKKvrunzJJ4HILSnopuziHM517ewSnOr3Ugx6"
  //       );
  //       if (
  //         user_email === "" ||
  //         user_name === "" ||
  //         user_phone === "" ||
  //         checkPassword === true
  //       ) {
  //         return helper.response(
  //           response,
  //           400,
  //           "Invalid Input, All Of Data Must Be Filled"
  //         );
  //       } else {
  //         if (requirement(user_password) === false) {
  //           return helper.response(
  //             response,
  //             400,
  //             `Password must be at least has minimum 8 character length, with one lowercase, one uppercase, one number and one special character`
  //           );
  //         } else {
  //           const checkPhone = await checkUserPhone(user_phone);
  //           if (checkPhone.length > 0) {
  //             return helper.response(
  //               response,
  //               400,
  //               `Phone number already registered`
  //             );
  //           } else {
  //             const checkDataUsers = await checkUser(user_email);
  //             if (checkDataUsers.length < 1) {
  //               const result = await registerUser(setData);
  //               return helper.response(response, 200, "Register Success", result);
  //             } else {
  //               return helper.response(response, 400, `Email already registered`);
  //             }
  //           }
  //         }
  //       }
  //     } catch (error) {
  //       return helper.response(response, 400, "Bad Request", error);
  //       console.log(error);
  //     }
  //   },
  //   patchLogout: async (request, response) => {
  //     let { activity_id, user_id } = request.query;
  //     const setData = {
  //       logout: new Date(),
  //     };
  //     const setData2 = {
  //       user_login_status: 0,
  //     };
  //     const checkId = await getUserById(user_id);
  //     console.log(checkId);
  //     try {
  //       if (checkId.length > 0) {
  //         const result = await patchLogout(setData, activity_id);
  //         const result2 = await patchUser(setData2, user_id);
  //         return helper.response(
  //           response,
  //           201,
  //           "Logout Success",
  //           result,
  //           result2
  //         );
  //       } else {
  //         return helper.response(
  //           response,
  //           404,
  //           `User By Id: ${user_id} Not Found`
  //         );
  //       }
  //     } catch (error) {
  //       return helper.response(response, 400, "Bad Request", error);
  //       console.log(error);
  //     }
  //   },
  getFriendList: async (request, response) => {
    const { id } = request.params;
    try {
      const result = await getFriendList(id);
      if (result.length >= 1) {
        //   client.setex("friendlist", 120, JSON.stringify(result));
        return helper.response(response, 200, "Get Success", result);
      } else {
        return helper.response(response, 400, "You dont have any friends");
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getRequestList: async (request, response) => {
    const { invitation } = request.params;
    const { user_id } = request.body;
    try {
      const result = await getRequestList(user_id);
      if (result.length >= 1) {
        //   client.setex("friendinvitation", 120, JSON.stringify(result));
        return helper.response(response, 200, "Get Success", result);
      } else {
        return helper.response(response, 400, "You dont have any invitation");
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  patchInvitation: async (request, response) => {
    const { invitation } = request.params;
    let { user_id, sender_id, response_status } = request.body;
    const setData = {
      created: new Date(),
      invite_status: 1,
      response_status,
    };
    const setData2 = {
      response_status,
      friend_created: new Date(),
    };
    const setData3 = {
      user_id,
      friend_id: sender_id,
      response_status,
      friend_created: new Date(),
    };
    try {
      const checkFriend = await checkFriendConnection(user_id, sender_id);
      if (checkFriend.length > 0) {
        return helper.response(
          response,
          400,
          "Both of you are friend",
          checkFriend
        );
      } else {
        if (response_status === 0) {
          const result = await patchInvitation(setData, user_id, sender_id);
          const result2 = await patchFriend(setData2, user_id, sender_id);
          return helper.response(
            response,
            201,
            "Patch Success",
            result,
            result2
          );
        } else {
          const result = await patchInvitation(setData, user_id, sender_id);
          const result2 = await patchFriend(setData2, user_id, sender_id);
          const result3 = await postNewFriend(setData3);
          return helper.response(
            response,
            201,
            "Patch Success",
            result,
            result2,
            result3
          );
        }
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
      console.log(error);
    }
  },
  postFriend: async (request, response) => {
    const { add } = request.params;
    const { user_id, friend_id } = request.body;
    const setData = {
      user_id,
      friend_id,
      response_status: 2,
    };
    const setData2 = {
      user_id: friend_id,
      sender_id: user_id,
      invite_status: 0,
      response_status: 2,
    };
    try {
      const checkFriend = await checkFriendConnection(user_id, friend_id);
      if (checkFriend.length > 0) {
        return helper.response(
          response,
          400,
          "Both of you are friend",
          checkFriend
        );
      } else {
        const checkStatus = await checkInvitationStatus(user_id, friend_id);
        console.log(checkFriend);
        if (checkStatus.length > 0) {
          return helper.response(
            response,
            400,
            "You already send a request",
            checkStatus
          );
        } else {
          const result = await postFriend(setData);
          const result2 = await postInvitation(setData2);
          return helper.response(
            response,
            200,
            "Invitation successfully send",
            result,
            result2
          );
        }
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};

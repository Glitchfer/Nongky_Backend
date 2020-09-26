const { getChatList, postChatList, patchChatList } = require("../model/chat");
const helper = require("../helper/index");
module.exports = {
  getChatList: async (request, response) => {
    const { id } = request.params;

    try {
      const result = await getChatList(id);
      if (result.length >= 1) {
        return helper.response(response, 200, "Get Success", result);
      } else {
        return helper.response(response, 400, "You dont have any chat yet");
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  postChatList: async (request, response) => {
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
  patchChatList: async (request, response) => {
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
};

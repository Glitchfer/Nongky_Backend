const router = require("express").Router();
const {
  getChatList,
  getChatRoom,
  postChatList,
  patchChatList,
  getChatRoomLanjutan,
  getLastChat,
  patchStatus,
  getUnread,
  // postChat,
} = require("../controller/chat");
const { authorization } = require("../middleware/Auth");
const { clearDataUserRedis } = require("../middleware/Redis");

router.get("/:id", authorization, getChatList);

router.post("/chat_history", authorization, getChatRoom);
router.post("/room", authorization, getChatRoomLanjutan);
router.post("/last", authorization, getLastChat);
router.post("/unread", authorization, getUnread);
router.post("/", authorization, postChatList);

router.patch("/", patchChatList);
router.patch("/:id", patchStatus);

module.exports = router;

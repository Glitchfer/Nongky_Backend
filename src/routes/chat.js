const router = require("express").Router();
const {
  getChatList,
  getChatRoom,
  postChatList,
  patchChatList,
  getChatRoomLanjutan,
  // postChat,
} = require("../controller/chat");
const { authorization } = require("../middleware/Auth");
const { clearDataUserRedis } = require("../middleware/Redis");

router.get("/:id", authorization, getChatList);

router.post("/chat_history", authorization, getChatRoom);
router.post("/room", authorization, getChatRoomLanjutan);
router.post("/", authorization, postChatList);

router.patch("/", patchChatList);

module.exports = router;

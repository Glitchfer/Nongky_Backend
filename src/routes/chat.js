const router = require("express").Router();
const {
  getChatList,
  postChatList,
  patchChatList,
} = require("../controller/chat");
const { authorization } = require("../middleware/Auth");
const { clearDataUserRedis } = require("../middleware/Redis");

router.get("/:id", authorization, getChatList);

router.post("/", postChatList);
// router.post("/add", authorization, postFriend);

router.patch("/", patchChatList);

module.exports = router;

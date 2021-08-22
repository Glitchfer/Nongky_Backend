const router = require("express").Router();
const {
  getFriendList,
  getRequestList,
  patchInvitation,
  postFriend,
} = require("../controller/friend");
const { authorization } = require("../middleware/Auth");
// const { clearDataUserRedis } = require("../middleware/Redis");

router.get("/:id", authorization, getFriendList);

router.post("/invitation", authorization, getRequestList);
router.post("/add", authorization, postFriend);

router.patch("/invitation", authorization, patchInvitation);

module.exports = router;

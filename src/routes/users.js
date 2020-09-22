const router = require("express").Router();
const {
  getUser,
  getUserByName,
  getUserByPhone,
  getUserById,
  loginUser,
  registerUser,
  patchLogout,
  activationUser,
  resetPassword,
} = require("../controller/users");
const { authorization } = require("../middleware/auth");
const {
  getUserByIdRedis,
  getUserRedis,
  getUserByPhoneRedis,
  getUserByNameRedis,
  clearDataUserRedis,
} = require("../middleware/redis");
const uploadFilter = require("../middleware/multer");

router.get("/", authorization, getUserRedis, getUser);
router.get("/:id", authorization, getUserByIdRedis, getUserById);
router.get("/phone", authorization, getUserByPhoneRedis, getUserByPhone);
router.get("/name", authorization, getUserByNameRedis, getUserByName);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.patch("/", clearDataUserRedis, patchLogout);
router.patch(
  "/:id",
  authorization,
  uploadFilter,
  clearDataUserRedis,
  activationUser
);
router.patch("/password/:email", resetPassword);
module.exports = router;

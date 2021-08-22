const router = require("express").Router();
const {
  getUser,
  getUserByName,
  getUserByPhone,
  getUserById,
  getUserByEmail,
  loginUser,
  registerUser,
  patchLogout,
  activationUser,
  resetPassword,
  patchLocation,
} = require("../controller/users");
const { authorization } = require("../middleware/Auth");
// const {
//   getUserByIdRedis,
//   getUserRedis,
//   getUserByPhoneRedis,
//   getUserByNameRedis,
//   getUserByEmailRedis,
//   clearDataUserRedis,
// } = require("../middleware/Redis");
const uploadFilter = require("../middleware/Multer");

router.get("/", authorization, getUser);
router.get("/:id", authorization, getUserById);
router.post("/phone", authorization, getUserByPhone);
router.post("/name", authorization, getUserByName);
router.post("/email", authorization, getUserByEmail);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.patch("/", patchLogout);
router.patch("/location", authorization, patchLocation);
router.patch("/:id", authorization, uploadFilter, activationUser);
router.patch("/password/:email", resetPassword);
module.exports = router;

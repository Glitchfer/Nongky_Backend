const router = require("express").Router();
const {
  loginUser,
  registerUser,
  patchLogout,
  patchUser,
} = require("../controller/users");
const { authorization } = require("../middleware/auth");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.patch("/", patchLogout);
router.patch("/:id", authorization, patchUser);
module.exports = router;

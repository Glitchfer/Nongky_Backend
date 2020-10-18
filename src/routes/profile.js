// Import router
const router = require("express").Router();
// Import controller
const { patchProfile } = require("../controller/profile");
const { authorization } = require("../middleware/Auth");
const { clearDataUserRedis } = require("../middleware/Redis");
const uploadFilter = require("../middleware/Multer");

router.patch(
  "/:id",
  authorization,
  uploadFilter,
  clearDataUserRedis,
  patchProfile
);

module.exports = router;

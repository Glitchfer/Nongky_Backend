const router = require("express").Router();
const {
  getCollection,
  postCollection,
  deleteCollection,
} = require("../controller/collection");
const { authorization } = require("../middleware/Auth");
const { clearDataUserRedis } = require("../middleware/Redis");
const uploadFilter = require("../middleware/Multer");

router.get("/:id", authorization, getCollection);

router.post(
  "/:id",
  authorization,
  clearDataUserRedis,
  uploadFilter,
  postCollection
);

router.delete("/:id", authorization, clearDataUserRedis, deleteCollection);

module.exports = router;

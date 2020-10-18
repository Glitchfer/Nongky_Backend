const {
  getCollectionByUserId,
  postCollection,
  getCollection,
  deleteCollection,
} = require("../model/collection");
const { getUserById } = require("../model/user");
const helper = require("../helper/index");
const redis = require("redis");
const client = redis.createClient();
let fs = require("fs");

module.exports = {
  getCollection: async (request, response) => {
    const { id } = request.params;
    try {
      const result = await getCollectionByUserId(id);
      if (result.length >= 1) {
        return helper.response(response, 200, "Get Success", result);
      } else {
        return helper.response(response, 400, "No photos & videos");
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  postCollection: async (request, response) => {
    const { id } = request.params;
    const image = request.file === undefined ? "" : request.file.filename;
    const checkId = await getUserById(id);
    const setData = {
      user_id: id,
      collection: image,
      collection_type: request.file.mimetype,
      created: new Date(),
    };
    try {
      if (checkId.length > 0) {
        if (
          (request.file.mimetype === "image/jpeg" &&
            request.file.size >= 1 * 1024 * 1024) ||
          (request.file.mimetype === "image/png" &&
            request.file.size >= 1 * 1024 * 1024)
        ) {
          fs.unlink(`./uploads/${image}`, function (err) {
            if (err) throw err;
          });
          return helper.response(
            response,
            403,
            "Image size must be less than 1MB"
          );
        } else {
          const result = await postCollection(setData, id);
          return helper.response(response, 201, "Collection Created", result);
        }
      } else {
        fs.unlink(`./uploads/${image}`, function (err) {
          if (err) throw err;
        });
        return helper.response(response, 403, `User By Id: ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  deleteCollection: async (request, response) => {
    try {
      const { id } = request.params;
      const checkCollection = await getCollection(id);
      if (checkCollection.length > 0) {
        fs.unlink(`./uploads/${checkCollection[0].collection}`, function (err) {
          if (err) throw err;
        });
        const result = await deleteCollection(id);
        return helper.response(response, 201, "Collection Deleted", result);
      } else {
        return helper.response(
          response,
          404,
          `Collection By Id: ${id} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request");
    }
  },
};

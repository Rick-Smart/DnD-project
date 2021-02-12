const router = require("express").Router();
const charController = require("../../controllers/characterController");

// Matches with "/api/characters"
router
  .route("/")
  .get(charController.findAll)
  .post(charController.create);

// Matches with "/api/characters/:id"
router
  .route("/:id")
  .get(charController.findById)
  .put(charController.update)
  .delete(charController.remove);

module.exports = router;
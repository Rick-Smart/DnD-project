const router = require("express").Router();


const postRoutes = require("./posts");
const charRoutes = requir("./characters");

// Post routes
router.use("/posts", postRoutes);
router.use("/characters", charRoutes);


module.exports = router;

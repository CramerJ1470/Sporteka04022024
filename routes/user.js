const controllers = require("../controllers/");
const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const { signupValidation, loginValidation } = require("../validation");

router.get("/", controllers.user.get);

router.post("/register", signupValidation, controllers.user.post.register);

router.post("/login", loginValidation, controllers.user.post.login);

router.post("/logout", controllers.user.post.logout);

router.put("/:id", controllers.user.put);

router.delete("/:id", controllers.user.delete);

module.exports = router;

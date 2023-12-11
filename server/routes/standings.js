const standings = require("../controllers/standings");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", standings.get);

// router.post("/", auth(), standings.post);

// router.put("/:id", auth(), standings.put);

// router.delete("/:id", auth(), standings.delete);

module.exports = router;
const clubtokens = require("../controllers/clubtokens");
const router = require("express").Router();
const cors = require("cors");


router.get("/", clubtokens.get);

// router.post("/", clubtokens.post);



module.exports = router;



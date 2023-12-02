const transactions = require("../controllers/transactions");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", transactions.get);

router.post("/", auth(), transactions.post);

router.put("/:id", auth(), transactions.put);

router.delete("/:id", auth(), transactions.delete);

module.exports = router;

const router = require("express").Router();

const postRouter = require("./post");
const authRouter = require("./auth");
const log = require("../middlewares/Logger");

router.use("/post", postRouter);
router.use("/auth", log, authRouter);

module.exports = router;

const AuthController = require("../controllers/authh");

const log = require("../middlewares/logger");

const router = require("express").Router();

router.post("/login", AuthController.LoginController);
router.post("/SignUp", AuthController.SignUpController);
router.get("/user/:id", AuthController.getUserController);

// router.post("/SignUp", log, SignUpController);
// here we write log also so that in terminal it is showing like ** auth middleware **  and **signupController called**

// but login me only showing ** loginController called**

module.exports = router;

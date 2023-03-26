const users = require("../models/User");

const SignUpController = async (req, res) => {
  console.log("signupController called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email and password are required");
    return;
  }

  const id = Math.floor(Math.random() * 1000);

  users.push({
    id,
    email,
    password,
  });

  // Math.floor => it gives me integer value
  // Math.random() => it gives me number between (1-9)
  //Math.random() * 1000 => it gives me number between (1-1000)

  res.status(200).json({
    id,
  });
};

const LoginController = async (req, res) => {
  console.log("Logincontroller called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email and password are required");
  }

  const user = users.find((item) => item.email === email);

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  if (user.password !== password) {
    res.status(401).send("Incorrect Password");
    return;
  }

  res.status(200).json(user);
};

const getUserController = (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(403).send("User id is required");
    return;
  }

  const user = users.find((item) => item.id === id);

  res.status(200).json(user);
};

module.exports = {
  SignUpController,
  LoginController,
  getUserController,
};

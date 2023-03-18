// const { multiply } = require("./utils.js"); // ES6 syntax

// console.log(multiply(3, 4));

// Note : use of import => react
//     : use of require => nodeJS

// or we can write like this also
// const utils = require("./utils")
// const { multiply, lag, hello } = require("./utils"); // common js syntax
// console.log(utils.multiply(3, 4));
// console.log(multiply(3, 4));

// lag.warning("this is just an info");
// lag.error("this will be an error");

// console.log(hello);

const express = require("express");

const app = express();

app.get("./user", (req, res) => {
  console.log("User was called");
  //   res.send("Hello User");
  res.send({
    name: "Shashant",
    age: 20,
  });
});

app.get("/", (req, res) => {
  // res.send("server is working now")
  //   res.sendFile(
  // "C:UsersshashOneDriveDesktopNew folder\filesystmorganizeranuj_bhaiyaNodeJsindex.html"
  //   );

  // res.sendFile(__dirname + "/index.html")

  // res.send({
  //     success: true
  // })

  res.json({
    success: true,
  });
});

app.listen(4000, () => {
  console.log("Listening on port : 4000");
});

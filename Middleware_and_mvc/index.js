const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const mainRouter = require("./routes/indexx");
const express = require("express");
const app = express();

app.use(express.json());

// app.use("/post", postRouter);
// app.use("/auth", authRouter);

app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toTimeString());
  next();
  // it is very important to write otherwise in insomnia there is showing like Loading such as circle

  //   if (req.body && req.body.name === "Shashant") {
  //     next();
  //   } else {
  //     res.send("Not allowed");
  //   }
});

app.use("/api", mainRouter);

app.get("/", (req, res) => {
  res.send({
    data: "ok",
  });
});

const PORT = process.env.PORT;

// const PORT = 4100;

// console.log(process.env.SECRET_API_KEY);

app.listen(PORT, () => {
  console.log(" started Listening on port : ", PORT);
});

/* 
step 1 : npm i express
step 2 : npm i nodemon
step 3 : node index.js
step 4 : we can see it on ***insomnia*****
like ***http://localhost:4100/api/auth/login***

** http status code => using this we can write like 403,404,403 and so on
*/

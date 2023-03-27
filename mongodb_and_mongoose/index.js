mongoose = require("mongoose");
// const User = require("./models/User");

const mongoUri =
  "mongodb+srv://shashantshekhar10:Sh70043@cluster0.zonfhbl.mongodb.net/?retryWrites=true&w=majority";

try {
  mongoose.connect(
    mongoUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("mongodb connected");
    }
  );
} catch (e) {
  console.log(e);
}

// **** this is using by promises***

// const user = new User({
//   email: "shs@gmail.com",
//   password: "1234",
// });

// user.save().then(() => {
//   console.log("user added");
// });

// async function createUser(newUser) {
//   const user = new User(newUser); // in memory user document created

//   const data = await user.save(); // user saved inside database
//   console.log("user", user);
//   console.log("data", data);
// }

// createUser({
//   email: "dev@gmail.com",
//   password: "hello",
// });

/* step 1: npm init -y => for install package.json
step 2: npm i mongoose => it is a liabrary to connect to database
step 3: npm i nodemon  and nodemon
*/

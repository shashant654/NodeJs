function multiply(a, b) {
  return a * b;
}

const lag = {
  warning: (info) => {
    console.log("warning", info);
  },
  error: (info) => {
    console.log("error", info);
  },
};

const hello = "this is hello string";
module.exports = { multiply, lag, hello };

/* step 1 : npm init
step 2 : into_to_nodejs : using this automatic created package.json
step  3 : npm install nodemon => for automatic reload   don't need to do like this    node Index.js again and again
and  FOR => node_modules and package-lock-json 
step 4 : rm -rf node_modules => for remove node_modules
step 5 : npm i => for install node_modules
step 6 : npm uninstall nanoid and so on

step 7 : npm i -D nodemon => for devdependencies 
and   npm i nanoid => for dependencies

like this 

"devDependencies": {
    "nanoid": "^4.0.1"
  },
  "dependencies": {
    "nodemon": "^2.0.21"
  }

  step 8 : npm i express => for express
*/

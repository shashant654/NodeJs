const log = (req, res, next) => {
  console.log("auth middleware");
  next(); // it is very important to write otherwise in insomnia there is showing like Loading such as circle
};

module.exports = log;

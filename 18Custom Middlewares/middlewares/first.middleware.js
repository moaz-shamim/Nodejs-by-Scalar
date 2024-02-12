function firstMiddleware(req, res, next) {
  console.log("I am First Custom Middleware in Separate module");
  next(); // Pass control to the next middleware function
}

module.exports = firstMiddleware;

function secondMiddleware(req, res, next) {
    console.log("I am second Custom Middleware in Separate module");
    next(); // Pass control to the next middleware function
  }
  
  module.exports = secondMiddleware;
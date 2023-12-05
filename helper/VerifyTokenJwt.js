const jwt = require("jsonwebtoken");

const VerifyJwtToken = async (token) => {

  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_KEY, (err, authData) => {
      if (err) {
        // Handle the case when the token is not valid
        resolve({ status: "error", message: "Token Expired" });
      } else {
        // Handle the case when the token is valid
        resolve({ status: "success", message: "Token verification successful" });
      }
    });
  });
};

module.exports = VerifyJwtToken;

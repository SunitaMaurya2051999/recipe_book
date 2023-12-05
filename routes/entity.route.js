// const db = require('../connections/db.js')
const EntityController = require("../controllers/entity.controller.seq.js");

module.exports = (app) => {

    app.post("/api/user/register-user", EntityController.registerUser);

    app.post("/api/user/login-user", EntityController.loginUser);
    
    app.post("/api/user/user-details",EntityController.getUserDetails)
}
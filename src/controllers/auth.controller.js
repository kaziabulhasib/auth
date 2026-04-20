const userModel = require("../models/user.model");


async function registerUser(req, res) {
    const { userName, email, password } = req.body;

}

module.exports = { registerUser };
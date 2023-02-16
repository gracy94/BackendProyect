const User = require("../models/User");

const userValidation = async (req, res, next) => {
    const user = await User.findOne({userName: req.body.userName})

    if (user) {
        res.status(400).json({msg: "UserName already registered"})
    } else {
        next();
    }
};

module.exports = userValidation;
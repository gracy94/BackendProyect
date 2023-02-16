const User = require("../models/User");

const emailValidation = async (req, res, next) => {
    const email = await User.findOne({email: req.body.email})

    if (email) {
        res.status(400).json({msg: "email already registered"})
    } else {
        next();
    }
};

module.exports = emailValidation;
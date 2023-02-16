const { validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
    const users = await User.find();

    if(users){
        res.status(200).json(users);
    } else{
        res.status(404).json({msg: 'No users db found'})
    }
};

const getUserById = async (req, res) => {

    if (req.params.id.length == 24) {
        const user = await User.findById(req.params.id);
    
        if(user){
            res.status(200).json({user, msg: 'ok'});
        } else{
            res.status(404).json({msg: 'The id is not valid'})
        }  
    } else {
        res.status(404).json({msg: 'The id must be 24 characters'})
    }

}

const getUserByName = async (req, res) => {
    const user = await User.findOne({userName: req.query.name});

    if(user){
        res.status(200).json({user, msg: 'ok'});
    } else{
        res.status(404).json({msg: 'User name is not valid'})
    }
}

const postUser = async (req, res) => {
    try {
        //Express-Validation
        const validationError = validationResult(req)

        if (validationError.isEmpty()) {

            //Bcrypt
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password, salt)

            const hashedUser = {
                userName: req.body.userName,
                password: hash,
                email: req.body.email,
            }

            const user = new User(hashedUser)
            await user.save()

            res.status(201).json({userName: user.userName, msg: 'ok', error: null})
        } else {
            res.status(400).json({userName: null, msg: 'invalid data', error: validationError.errors})
        }
    }catch (error) {
        res.status(500).json({msg: 'Error -', error: error.message})
    }
}

module.exports = {getUsers, getUserById, getUserByName, postUser};
const User = require('../models/User')

const getUsers = async (req, res) => {
    const users = await User.find();

    if(users){
        res.status(200).json(users);
    } else{
        res.status(404).json({msg: 'No users db found'})
    }
};

const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);

    if(user){
        res.status(200).json({user, msg: 'ok'});
    } else{
        res.status(404).json({msg: 'The id is not valid'})
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
        const user = new User(req.body)
        await user.save()
        res.status(200).json({userName: user.userName, msg: 'ok'})  
    }catch (error) {
        res.status(500).json({msg: 'Error -' + error.message})
    }
}

module.exports = {getUsers, getUserById, getUserByName, postUser};
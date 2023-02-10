const Pet = require('../models/Pet')

const getPets = async (req, res) => {
    const pets = await Pet.find();
    res.status(200).json(pets);
};

const getPet = (req, res) => {
    const id= req.params.id;
    const pet = db.find( p => p.id == id);

    res.status(200).json(pet);
}

module.exports = {getPets, getPet};
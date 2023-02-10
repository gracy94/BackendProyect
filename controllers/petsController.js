const Pet = require('../models/Pet')

const getPets = async (req, res) => {
    const pets = await Pet.find();
    res.status(200).json(pets);
};

const getPetById = async (req, res) => {
    const pet = await Pet.findById(req.params.id);
    res.status(200).json({pet, msg: 'ok'});
}

const getPetByName = async (req, res) => {
    const pet = await Pet.findOne({petName: req.query.name});
    res.status(200).json({pet, msg: 'ok'});
}

const postPet = async (req, res) => {
    const pet = new Pet(req.body)
    await pet.save()

    res.status(200).json({petName: pet.petName, msg: 'ok'})
}

module.exports = {getPets, getPetById, getPetByName, postPet};
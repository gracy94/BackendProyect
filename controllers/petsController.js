const { validationResult } = require('express-validator');
const Pet = require('../models/Pet')

const getPets = async (req, res) => {
    const pets = await Pet.find();

    if(pets){
        res.status(200).json(pets);
    } else{
        res.status(404).json({msg: 'No pets found on db'})
    }
};

const getPetById = async (req, res) => {

    if (req.params.id.length == 24) {
        const pet = await Pet.findById(req.params.id);
    
        if(pet){
            res.status(200).json({pet, msg: 'ok'});
        } else{
            res.status(404).json({msg: 'The id is not valid'})
        }
    } else {
        res.status(404).json({msg: 'The id must be 24 characters'})
    }
}

const getPetByName = async (req, res) => {
    const pet = await Pet.findOne({petName: req.query.name});

    if(pet){
        res.status(200).json({pet, msg: 'ok'});
    } else{
        res.status(404).json({msg: 'Pet name is not valid'})
    }
}

const postPet = async (req, res) => {
    try {
        const validationError = validationResult(req)

        if (validationError.isEmpty()) {
            const pet = new Pet(req.body)
            await pet.save()
            res.status(201).json({petName: pet.petName, msg: 'ok', error: null})  
        } else {
            res.status(400).json({petName: null, msg: 'invalid data', error: validationError.errors})
        }

    }catch (error) {
        res.status(500).json({msg: 'Error -' + error.message})
    }
}

const putPet = async (req, res) => {
    try {
        const validationError = validationResult(req)

        if (validationError.isEmpty()) {
            const pet = await Pet.findByIdAndUpdate(req.params.id, req.body)
    
            if(pet){
                res.status(200).json({petName: req.body.petName, msg: 'pet successfully updated'})
            } else{
                res.status(404).json({petName: null, msg: 'The id is not valid'})
            }               
        } else {
            res.status(400).json({petName: null, msg: 'invalid data', error: validationError.errors})
        }
    }catch (error) {
        res.status(500).json({msg: 'Error -' + error.message})
    }
}

const deletePet = async (req, res) => {
    try {
        const pet = await Pet.findByIdAndDelete(req.params.id)

        if(pet){
            res.status(200).json({petName: req.body.petName, msg: 'pet successfully deleted'})
        } else{
            res.status(404).json({petName: null, msg: 'The id is not valid'})
        }
    } catch (error) {
        res.status(500).json({msg: 'Error -' + error.message})
    }
}

module.exports = {getPets, getPetById, getPetByName, postPet, putPet, deletePet};
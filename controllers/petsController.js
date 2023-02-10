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
    try {
        const pet = new Pet(req.body)
        await pet.save()
        res.status(200).json({petName: pet.petName, msg: 'ok'})  
    }catch (error) {
        res.status(500).json({msg: 'Error -' + error.message})
    }
}

const putPet = async (req, res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(req.params.id, req.body)

        if(pet){
            res.status(200).json({petName: req.body.petName, msg: 'pet successfully updated'})
        } else{
            res.status(404).json({petName: null, msg: 'The id is not valid'})
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
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
    owner:{
        type: String,
        required: true,
    },
    petName:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        require: true,
    },
    age:{
        type: Number,
        required: true,
    }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
const db = [
    {
        id: 1,
        name: 'Tobby',
        type: 'dog',
    },
    {
        id:2,
        name: 'Zachary',
        type: 'cat'
    },
]

const getPets = (req, res) => {
    res.status(200).json(db);
};

const getPet = (req, res) => {
    const id= req.params.id;
    const pet = db.find( p => p.id == id);

    res.status(200).json(pet);
}

module.exports = {getPets, getPet};
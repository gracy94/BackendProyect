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
    res.json(db);
};

const getPet = (req, res) => {
    const id= req.params.id;
    const pet = db.find( p => p.id == id);

    res.json(pet);
}

module.exports = {getPets, getPet};
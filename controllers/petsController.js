const getPets = (req, res) => {
    res.json([
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
    ]);
};

module.exports = {getPets};
const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://Graciela94:GracielaFaria120613@cluster0.i3w0t1q.mongodb.net/test');
        console.log ('Conectado a la base de datos...');
    } catch (error) {
        console.log (error.message, '...no se pudo conectar a la base de datos')
    }
}

module.exports = connect;
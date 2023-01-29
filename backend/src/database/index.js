const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');

// Suprimir la advertencia de Mongoose
mongoose.set('strictQuery', true);

module.exports = mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
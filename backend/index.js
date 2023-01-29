const express = require('express');
const cors = require('cors');
const {PORT} = require('./src/config');
const { ContactRoutes }= require('./src/routes');
const { NotFoundMiddleware, ErrorMiddleware } = require('./src/middlewares');
const  ConectDatabase  = require('./src/database');

const app = express();

app.use(cors()).use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/contacts', ContactRoutes);
app.use(NotFoundMiddleware).use(ErrorMiddleware);

const init = async () => {
    try {

        await ConectDatabase;
        console.log('Database connected');
        await app.listen(PORT);
        console.log(`Server running on port ${PORT}`);
    }catch (error){
        console.log(error);
    }
}
init();

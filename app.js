const express = require('express');
const app = express()
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/collections');
const userRouters=require('./api/routes/users');

// connection with mongodb atlas
mongoose.connect('mongodb+srv://daraz_clone:daraz123@cluster0-a0yji.mongodb.net/daraz_clone', 
{ useNewUrlParser: true })

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

app.use('/daraz_products', productRoutes);
app.use('/daraz_collections', orderRoutes);
app.use('/daraz_users', userRouters);

app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status= 404;
    next(error);
    
});

app.use((error, req,res,next) => {

        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message
            }
        });
});
module.exports = app; 
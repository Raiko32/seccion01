require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
// Using ES6 imports
//import mongoose from 'mongoose';
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require('./routes/usuario'));

// parse application/json
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/cafe", (err, res) => { 
    
useNewUrlParser: true ;

if ( err) throw err;

else console.log('base activado');

});

/*mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
 
if ( err) throw err;

console.log('base activado');

});*/




app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});
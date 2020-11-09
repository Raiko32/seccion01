const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let rolesValidos = {

   values: ['ADMIN_ROLE', 'USER_ROLE'],
   message: '{VALUE} no es un rol valido'

};
let Schema = mongoose.Schema;

let usuarioShema = new Schema({

    nombre: {
        
       type: String,
       required: [true, 'El nombre es necesario']

    },

    email: {
        
        type: String,
        required: [true, 'El email es necesario']
 
     },

     password: {
        
        type: String,
        unique: true,
        required: [true, 'El password es obligatorio']
 
     },

     img: {

      type: String,
      required: false

     },

     role: {

      type:String,
      default: 'USER_ROLE',
      enum: rolesValidos

     },

     estado: {

      type: Boolean,
      default: true

     },

     google: {

      type: Boolean,
      default: false

     }

});


usuarioShema.plugin( uniqueValidator, {message: '{PATH} debe de ser unico por favore'});

module.exports = mongoose.model('Usuario', usuarioShema);
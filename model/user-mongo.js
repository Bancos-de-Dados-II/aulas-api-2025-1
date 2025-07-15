import mongoose from '../database/mongo.js';

const usuarioSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    nome: String
});
const Usuario = mongoose.model('Usuario', 
    usuarioSchema);

export default Usuario;
import express from 'express';
import { salvarUsuario } from 
    '../controller/user-controller-mongo.js';
const UsuarioRouter = express.Router();

UsuarioRouter.post('/', salvarUsuario);

export default UsuarioRouter;
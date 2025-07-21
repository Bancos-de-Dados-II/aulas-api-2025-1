import express from 'express';
import { salvarUsuario, getUsuarios } from 
    '../controller/user-controller-mongo.js';
const UsuarioRouter = express.Router();

UsuarioRouter.post('/', salvarUsuario);
UsuarioRouter.get('/', getUsuarios);

export default UsuarioRouter;
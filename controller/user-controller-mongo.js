import Usuario from '../model/user-mongo.js';

export async function salvarUsuario(req, res){
    //TODO: Fazer validações
    const retorno = await Usuario.create(req.body);
    res.status(201).json(retorno);
}

export async function getUsuarios(req, res){
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
}
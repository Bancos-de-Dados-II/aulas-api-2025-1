import Usuario from '../model/user-mongo.js';

export async function salvarUsuario(req, res){
    //TODO: Fazer validações
    const retorno = await Usuario.create(req.body);
    res.status(201).json(retorno);
}
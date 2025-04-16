import { adicionar, alterar, listar, remover } from "../repository/loginAdmRepository.js";
import { Router } from "express";
const endpoints = Router();

endpoints.get('/loginAdm', async (req, resp) => {
    let login = await listar();
    resp.send(login);
})

endpoints.post('/loginAdm', async (req, resp) => {
    let loginAdm = req.body;
    
    let novoAdm = await adicionar(loginAdm);
    resp.send({novoAdm});
})

endpoints.put('/loginAdm/:id', async (req, resp) => {
    let id = req.params.id;
    let loginAdm = req.body;
    
    let loginModificado = await alterar(id, loginAdm);
    resp.send({loginModificado});
})

endpoints.delete('/loginAdm/:id', async (req, resp) => {
    let id = req.params.id;

    let loginModificado = await remover(id);
    if (loginModificado == 0) {
        return resp.status(404).send({erro: 'Login de administrador não encontrado.'});
    }
    
    resp.send({loginModificado});
})


export default endpoints;
import { adicionar, alterar, listar, remover } from "../repository/loginClientesRepository.js";
import { Router } from "express";
const endpoints = Router();

endpoints.get('/loginCliente', async (req, resp) => {
    let loginCli = await listar();
    resp.send(loginCli);
})

endpoints.post('/loginCliente', async (req, resp) => {
    let loginCli = req.body;
    
    let cliente = await adicionar(loginCli);
    resp.send({cliente});
})

endpoints.put('/loginCliente/:id', async (req, resp) => {
    let id = req.params.id;
    let loginCli = req.body;
    
    let clienteModificado = await alterar(id, loginCli);
    resp.send({clienteModificado});
})

endpoints.delete('/loginCliente/:id', async (req, resp) => {
    let id = req.params.id;

    let clienteModificado = await remover(id);
    if (clienteModificado == 0) {
        return resp.status(404).send({erro: 'Login cliente não encontrado.'});
    }
    
    resp.send({clienteModificado});
})


export default endpoints;
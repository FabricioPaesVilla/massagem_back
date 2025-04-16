import { adicionar, alterar, listar, remover } from "../repository/cdClienteRepository.js";
import { Router } from "express";
const endpoints = Router();

endpoints.get('/cadastroCliente', async (req, resp) => {
    let cadastroCli = await listar();
    resp.send(cadastroCli);
})

endpoints.post('/cadastroCliente', async (req, resp) => {
    let cadastroCli = req.body;
    
    let novoCliente = await adicionar(cadastroCli);
    resp.send({novoCliente});
})

endpoints.put('/cadastroCliente/:id', async (req, resp) => {
    let id = req.params.id;
    let cadastroCli = req.body;
    
    let cadastroModificado = await alterar(id, cadastroCli);
    resp.send({cadastroModificado});
})

endpoints.delete('/cadastroCliente/:id', async (req, resp) => {
    let id = req.params.id;

    let cadastroModificado = await remover(id);
    if (cadastroModificado == 0) {
        return resp.status(404).send({ erro: 'Cadastro cliente não encontrado.' });
    }
    
    resp.send({ cadastroModificado });
})


export default endpoints;
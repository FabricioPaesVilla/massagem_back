import { adicionar, alterar, listar, remover } from "../repository/clienteRepository.js";
import { Router } from "express";
const endpoints = Router();

endpoints.get('/cliente', async (req, resp) => {
    let cliente = await listar();
    resp.send(cliente);
})

endpoints.post('/cliente', async (req, resp) => {
    let cliente = req.body;
    
    let novoCliente = await adicionar(cliente);
    resp.send({novoCliente});
})

endpoints.put('/cliente/:id', async (req, resp) => {
    let id = req.params.id;
    let cliente = req.body;
    
    let clienteModificado = await alterar(id, cliente);
    resp.send({clienteModificado});
})

endpoints.delete('/cliente/:id', async (req, resp) => {
    let id = req.params.id;

    let clienteModificado = await remover(id);
    if (clienteModificado == 0) {
        return resp.status(404).send({ erro: 'Cliente não encontrado.' });
    }
    
    resp.send({ clienteModificado });
})


export default endpoints;
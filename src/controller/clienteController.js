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

endpoints.put('/cliente/:email', async (req, resp) => {
    let email = req.params.email;
    let cliente = req.body;
    
    let clienteModificado = await alterar(email, cliente);
    resp.send({clienteModificado});
})

endpoints.delete('/cliente/:email', async (req, resp) => {
    let email = req.params.email;

    let clienteModificado = await remover(email);
    if (clienteModificado == 0) {
        return resp.status(404).send({ erro: 'Cliente não encontrado.' });
    }
    
    resp.send({ clienteModificado });
})


export default endpoints;
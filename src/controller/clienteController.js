import consultarClienteService from "../services/cliente/consultarClienteService.js";
import consultarClientePorIdService from "../services/cliente/consultarClientePorIdService.js"
import adicionarClienteService from "../services/cliente/adicionarClienteService.js"
import alterarClienteService from "../services/cliente/alterarClienteService.js"
import { Router } from "express";
const endpoints = Router();

endpoints.get('/cliente', async (req, resp) => {
    try {
        let clientes = req.body.nome;

        let registros = await consultarClienteService(clientes);

        resp.send(registros);
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.get('/cliente/:id', async (req, resp) => {
    try {
        let clientes = req.body.id;

        let registros = await consultarClientePorIdService(clientes);

        resp.send(registros);
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.post('/cliente', async (req, resp) => {
    try {
        let cliente = req.body;

        let id = await adicionarClienteService(cliente);

        resp.send({
            id: id
        });
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.put('/cliente/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let cliente = req.body;

        await alterarClienteService(id, cliente);

        resp.status(204).send();
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.delete('/cliente/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await removerClienteService(id);

        resp.status(204).send();
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})


export default endpoints;
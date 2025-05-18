import { Router } from "express";
import consultarMassagemService from "../services/massagem/consultarMassagemService.js";
import consultarMassagemPorIdService from "../services/massagem/consultarMassagemPorIdService.js";
import adicionarMassagemService from "../services/massagem/adicionarMassagemService.js";
import AlterarMassagemService from "../services/massagem/alterarMassagemService.js";
import removerMassagemService from "../services/massagem/removerMassagemService.js";

const endpoints = Router();

endpoints.get('/massagem', async (req, resp) => {
    try {
        let titulo = req.query.titulo;

        let registros = await consultarMassagemService(titulo);

        resp.send(registros);
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.get('/massagem/:id', async (req, resp) => {
    try {
        let massagems = req.params.id;
 
        let registros = await consultarMassagemPorIdService(massagems);

        resp.send(registros);
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.post('/massagem', async (req, resp) => {
    try {
        let massagem = req.body;
    
        let id = await adicionarMassagemService(massagem);

        resp.send({ 
            id: id
         });
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.put('/massagem/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let massagems = req.body;
    
        await AlterarMassagemService(id, massagems);

        resp.status(204).send();
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.delete('/massagem/:id', async (req, resp) => {
    try {
        let id = req.params.id;
    
        await removerMassagemService(id);
    
        resp.status(204).send();
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

export default endpoints;
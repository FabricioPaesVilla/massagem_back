import  consultarAgendaService  from '../services/agenda/consultarAgendaService.js'
import  consultarAgendaPorIdService  from '../services/agenda/consultarAgendaPorIdService.js'
import  adicionarAgendaService from '../services/agenda/adicionarAgendaService.js'
import alterarAgendaService  from '../services/agenda/alterarAgendaService.js'
import  removerAgendaService  from '../services/agenda/removerAgendaService.js'

import { Router } from "express";
const endpoints = Router();

endpoints.get('/agenda', async (req, resp) => {
    try {
        //let agendas = req.body.date;
        let agendas = "";

        let registros = await consultarAgendaService(agendas);

        resp.send(registros);
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.get('/agenda/:id', async (req, resp) => {
    try {
        let agendas = req.body.id;

        let registros = await consultarAgendaPorIdService(agendas);

        resp.send(registros);
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.post('/agenda', async (req, resp) => {
    try {
        let Agendas = req.body;

        let id = await adicionarAgendaService(Agendas);

        resp.send({
            id: id
        });
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.put('/agenda/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let agendas = req.body;

        await alterarAgendaService(id, agendas);

        resp.status(204).send();
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.delete('/agenda/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await removerAgendaService(id);

        resp.status(204).send();
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})


export default endpoints;
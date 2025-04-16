import { adicionar, alterar, listar, remover } from "../repository/agendaRepository.js";
import { Router } from "express";
const endpoints = Router();

endpoints.get('/agenda', async (req, resp) => {
    let agendamento = await listar();
    resp.send(agendamento);
})

endpoints.post('/agenda', async (req, resp) => {
    let agenda = req.body;
    
    let novoAgendamento = await adicionar(agenda);
    resp.send({novoAgendamento});
})

endpoints.put('/agenda/:id', async (req, resp) => {
    let id = req.params.id;
    let agenda = req.body;
    
    let agendamentoAfetado = await alterar(id, agenda);
    resp.send({agendamentoAfetado});
})

endpoints.delete('/agenda/:id', async (req, resp) => {
    let id = req.params.id;

    let agendamentoAfetado = await remover(id);
    if (agendamentoAfetado == 0) {
        return resp.status(404).send({erro: 'Agendamento não encontrado.'});
    }
    
    resp.send({agendamentoAfetado});
})


export default endpoints;
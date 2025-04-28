//import { adicionar, alterar, consultarMassagem, consultarMassagemPorId, remover } from "../repository/massagemRepository.js";
import { Router } from "express";
import consultarMassagemService from "../services/massagem/consultarMassagemService.js";
import consultarMassagemPorIdService from "../services/massagem/consultarMassagemPorIdService.js";
import adicionarMassagemService from "../services/massagem/adicionarMassagemService.js";
import AlterarMassagemService from "../services/massagem/alterarMassagemService.js";
import removerMassagemService from "../services/massagem/removerMassagemService.js";

import multer from 'multer';

const endpoints = Router();

endpoints.get('/massagem', async (req, resp) => {
    try {
        let massagems = req.body.titulo;
 
        let registros = await consultarMassagemService(massagems);

        resp.send(registros);
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.get('/massagem/:id', async (req, resp) => {
    try {
        let massagems = req.body.id;
 
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

//ainda pensando em como vai salvar a imagem
let uploadMassagem = multer({ dest: './storage/massagem'})
endpoints.put('/massagem/:id/imagem', uploadMassagem.single('imagem'),async (req, resp) => {
    try {
        let id = req.params.id;
        let caminhoImagem = req.filter.path;

        await alterarImagemMassagemService(id, caminhoImagem);

        resp.status(204).send();
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

export default endpoints;
import { adicionar, alterar, listar, remover } from "../repository/cadastroAdmRepository.js";
import { Router } from "express";
const endpoints = Router();

endpoints.get('/cadastroAdm', async (req, resp) => {
    let adms = await listar();
    resp.send(adms);
})

endpoints.post('/cadastroAdm', async (req, resp) => {
    let adms = req.body;

    let novosAdms = await adicionar(adms);
    resp.send({ novosAdms });
})

endpoints.put('/cadastroAdm/:id', async (req, resp) => {
    let id = req.params.id;
    let adms = req.body;

    let admsAfetados = await alterar(id, adms);
    resp.send({ admsAfetados });
})

endpoints.delete('/cadastroAdm/:id', async (req, resp) => {
    let id = req.params.id;

    let admsAfetados = await remover(id);
    if (admsAfetados == 0) {
        return resp.status(404).send({ erro: 'Cadastro de administrador não encontrado.' });
    }

    resp.send({ admsAfetados });
})


export default endpoints;
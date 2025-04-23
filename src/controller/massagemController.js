import { adicionar, alterar, listar, remover } from "../repository/massagemRepository.js";
import { Router } from "express";
const endpoints = Router();

endpoints.get('/massagem', async (req, resp) => {
    let massagems = await listar();
    resp.send(massagems);
})

endpoints.post('/massagem', async (req, resp) => {
    let massagems = req.body;

    let novasMassagems = await adicionar(massagems);
    resp.send({ novasMassagems });
})

endpoints.put('/massagem/:titulo', async (req, resp) => {
    let titulo = req.params.titulo;
    let massagems = req.body;

    let massagemsAfetadas = await alterar(titulo, massagems);
    resp.send({ massagemsAfetadas });
})

endpoints.delete('/massagem/:titulo', async (req, resp) => {
    let titulo = req.params.titulo;

    let massagemAfetadas = await remover(titulo);
    //não esquecer de testar/verificar esse if
    if (massagemAfetadas == 0) {
        return resp.status(404).send({ erro: 'Cadastro de administrador não encontrado.' });
    }

    resp.send({ massagemAfetadas });
})

export default endpoints;
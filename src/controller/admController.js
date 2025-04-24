import { adicionar, alterar, listar, remover, verificar} from "../repository/admRepository.js";
import { Router } from "express";
const endpoints = Router();

endpoints.get('/adm', async (req, resp) => {
    let adms = await listar();
    resp.send(adms);
})

endpoints.post('/adm', async (req, resp) => {
    let adms = req.body;

    let novosAdms = await adicionar(adms);
    resp.send({ novosAdms });
})

endpoints.put('/adm/:email', async (req, resp) => {
    let email = req.params.email;
    let adms = req.body;

    let admsAfetados = await alterar(email, adms);
    resp.send({ admsAfetados });
})

endpoints.delete('/adm/:email', async (req, resp) => {
    let email = req.params.email;

    let admsAfetados = await remover(email);
    //não esquecer de testar/verificar esse if
    if (admsAfetados == 0) {
        return resp.status(404).send({ erro: 'Cadastro de administrador não encontrado.' });
    }

    resp.send({ admsAfetados });
})

endpoints.post('/admLogin', async (req, resp) => {
    let email = req.body.email;
    let password = req.body.password

    let admVerificado = await verificar(email, password);
    resp.send({admVerificado});
})

export default endpoints;
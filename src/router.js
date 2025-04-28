import agenda from './controller/agendaController.js'
import adm from './controller/admController.js'
import cliente from './controller/clienteController.js'
import massagem from './controller/massagemController.js'

import express from 'express';

export default function adicionarRotas(servidor) {
    servidor.use(agenda);
    servidor.use(adm);
    servidor.use(cliente);
    servidor.use(massagem);
    servidor.use('/storage/massagem', express.static('./storage/massagem'));
}
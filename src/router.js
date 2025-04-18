import agenda from './controller/agendaController.js'
import cadAdm from './controller/cadastroAdmController.js'
import cadCli from './controller/cdClienteController.js'
import logCliente from './controller/loginClientesController.js'
import logAdm from './controller/loginAdmController.js'
import cliente from './controller/clienteController.js'

export default function adicionarRotas(servidor) {
    servidor.use(agenda);
    servidor.use(cadAdm);
    servidor.use(cadCli);
    servidor.use(logCliente);
    servidor.use(logAdm);
    servidor.use(cliente);
}
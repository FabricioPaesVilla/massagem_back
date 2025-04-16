import agenda from './src/controller/agendaController.js'
import cadAdm from './src/controller/cadastroAdmController.js'
import cadCli from './src/controller/cdClienteController.js'
import logCliente from './src/controller/loginClientesController.js'
import logAdm from './src/controller/loginAdmController.js'
import cliente from './src/controller/clienteController.js'

export default function adicionarRotas(servidor) {
    servidor.use(agenda);
    servidor.use(cadAdm);
    servidor.use(cadCli);
    servidor.use(logCliente);
    servidor.use(logAdm);
    servidor.use(cliente);
}
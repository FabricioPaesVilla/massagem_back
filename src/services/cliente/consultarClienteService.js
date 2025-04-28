import { consultarCliente } from "../../repository/clienteRepository.js";

export default async function consultarClienteService(nome) {
    if (!nome) {
        nome = ' ';
    }

    let registros = await consultarCliente(nome);

    return registros;
}
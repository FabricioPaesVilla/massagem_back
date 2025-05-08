import { removerCliente } from "../../repository/clienteRepository.js";

export default async function removerMassagemService(id) {
    let linhasAfetadas = await removerCliente(id);
    if (linhasAfetadas == 0) {
        throw new Error('nenhum cliente foi removido');
    }
}
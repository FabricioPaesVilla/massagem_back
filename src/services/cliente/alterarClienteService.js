import { alterarCliente } from "../../repository/clienteRepository.js";
import { validarNovoCliente } from "../../validations/clienteValidation.js";

export default async function AlterarClienteService(id, cliente) {
    validarNovoCliente(cliente);

    let linhasAfetadas = await alterarCliente(id, cliente);
    if (linhasAfetadas == 0) {
        throw new Error('nenhum cliente alterado');
    }
}
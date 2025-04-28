import { alterarCliente } from "../../repository/clienteRepository";
import { validarNovoCliente } from "../../validations/cliente/clienteValidation";

export default async function AlterarClienteService(id, cliente) {
    validarNovoCliente(cliente);

    let linhasAfetadas = await alterarCliente(id, cliente);
    if (linhasAfetadas == 0) {
        throw new Error('nenhum cliente alterado');
    }
}
import { adicionarCliente, consultarClientePorEmail } from "../../repository/clienteRepository.js";
import {validarNovoCliente, validarClienteIgual } from '../../validations/clienteValidation.js'

export default async function adicionarClienteService(cliente) {
    validarNovoCliente(cliente);

    let resistros = await consultarClientePorEmail((cliente.email));
    validarClienteIgual(resistros);
    
    let id = await adicionarCliente(cliente);

    return id;
}
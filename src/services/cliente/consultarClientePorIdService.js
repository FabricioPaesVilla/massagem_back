import { consultarClientePorId } from '../../repository/clienteRepository.js'
import { validarClienteUnico } from '../../validations/clienteValidation.js'

export default async function consultarMassagemPorIdService(id) {
    let registros = await consultarClientePorId(id);

    validarClienteUnico(registros);
    
    let massagem = registros[0];
    return massagem;
}
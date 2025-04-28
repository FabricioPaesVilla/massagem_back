
export function validarNovoCliente(cliente) {
    if (!cliente.email) {
        //lembrete de criar a função de validação do email
        throw new Error('email do cliente obrigatorio');
    }
    if (!cliente.nome) {
        throw new Error('nome do cliente obrigatório');
    }
    if (!cliente.endereco) {
        throw new Error('endereço do cliente obrigatório');
    }
    if (!cliente.telefone) {
        throw new Error('telefone do cliente obrigatório');
    }
    if (!cliente.cpf) {
        //lembrete de criar a função de validação do cpf
        throw new Error('cpf do cliente obrigatório');
    }
}

export function validarClienteUnico(registros) {
    if (registros.length == 0) {
        throw new Error('cliente não encontrado');
        
    }
}

export function validarClienteIgual(registros) {
    if (registros.length > 0) {
        throw new Error('cliente já cadastrado');
    }
}
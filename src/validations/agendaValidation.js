
export function validarNovaAgenda(cliente) {
    if (!cliente.date) {
        throw new Error('data da agenda obrigatorio');
    }
    if (!cliente.endereco) {
        throw new Error('endereço da agenda obrigatorio');
    }
    if (!cliente.tipo_massagem) {
        throw new Error('massagems da agenda obrigatorio');
    }
    if (!cliente.valor) {
        throw new Error('valor da agenda obrigatorio');
    }
    if (!cliente.id_cliente) {
        throw new Error('id_cliente da agenda obrigatorio');
    }
}

export function validarAgendaUnico(registros) {
    if (registros.length == 0) {
        throw new Error('agenda não encontrado');
        
    }
}

export function validarAgendaIgual(registros) {
    if (registros.length > 0) {
        throw new Error('agenda já cadastrado');
    }
}
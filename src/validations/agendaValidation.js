
export function validarNovaAgenda(cliente) {
    if (!cliente.dia) {
        throw new Error('data da agenda obrigatorio');
    }
    if (!cliente.hora) {
        throw new Error('data da agenda obrigatorio');
    }
    if (!cliente.endereco) {
        throw new Error('endereço da agenda obrigatorio');
    }
    if (!cliente.tipo_massagem) {
        throw new Error('massagems da agenda obrigatorio');
    }
    if (!cliente.nome_cliente) {
        throw new Error('id_cliente da agenda obrigatorio');
    }
}

export function validarAgendaUnico(registros) {
    if (registros.length == 0) {
        throw new Error('agenda não encontrado');
        
    }
}

export function validarAgendaIgual(registros, agenda) {
    for (let i = 0; i < registros.length; i++) {
        const element = registros[i];
        if (element.hora == agenda.hora) {
            throw new Error('agenda já cadastrado');    
        }
    }
    /*
    if (registros.length > 0) 
        throw new Error('agenda já cadastrado');
    */
}
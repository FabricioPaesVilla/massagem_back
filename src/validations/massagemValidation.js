

export function validarNovaMassagem(massagem) {
    if (!massagem.titulo) {
        throw new Error('titulo da massagem obrigatorio');
    }
    if (!massagem.descricao) {
        throw new Error('descrição da massagem obrigatório');
    }
}

export function validarMassagemUnico(registros) {
    if (registros.length == 0) {
        throw new Error('massagem não encontrado');
        
    }
}

export function validarMassagemIgual(registros) {
    if (registros.length > 0) {
        throw new Error('massagem já cadastrado');
    }
}

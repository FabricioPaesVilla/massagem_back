import { adicionarMassagem, consultarMassagemPorTitulo } from "../../repository/massagemRepository.js";
import { validarMassagemIgual, validarNovaMassagem } from "../../validations/massagemValidation.js";


export default async function adicionarMassagemService(massagem) {
    validarNovaMassagem(massagem);

    let resistros = await consultarMassagemPorTitulo((massagem.titulo));
    validarMassagemIgual(resistros);
    
    let id = await adicionarMassagem(massagem);

    return id;
}
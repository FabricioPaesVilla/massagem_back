import { consultarMassagemPorId } from "../../repository/massagemRepository.js";
import { validarMassagemUnico } from "../../validations/massagemValidation.js";


export default async function consultarMassagemPorIdService(id) {
    let registros = await consultarMassagemPorId(id);

    validarMassagemUnico(registros);
    
    let massagem = registros[0];
    return massagem;
}
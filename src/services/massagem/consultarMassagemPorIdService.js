import { consultarMassagemPorId } from "../../repository/massagemRepository";
import { validarMassagemUnico } from "../../validations/massagem/massagemValidation";


export default async function consultarMassagemPorIdService(id) {
    let registros = await consultarMassagemPorId(id);

    validarMassagemUnico(registros);
    
    let massagem = registros[0];
    return massagem;
}
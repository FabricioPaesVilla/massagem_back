import { alterarMassagem } from "../../repository/massagemRepository.js";
import { validarNovaMassagem } from "../../validations/massagemValidation.js";


export default async function AlterarMassagemService(id, massagem) {
    validarNovaMassagem(massagem);

    let linhasAfetadas = await alterarMassagem(id, massagem);
    if (linhasAfetadas == 0) {
        throw new Error('nenhuma massagem alterada');
    }
}
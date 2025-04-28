import { alterarMassagem } from "../../repository/massagemRepository";
import { validarNovaMassagem } from "../../validations/massagem/massagemValidation";


export default async function AlterarMassagemService(id, massagem) {
    validarNovaMassagem(massagem);

    let linhasAfetadas = await alterarMassagem(id, massagem);
    if (linhasAfetadas == 0) {
        throw new Error('nenhuma massagem alterada');
    }
}
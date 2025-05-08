import { alterarImagemMassagem } from "../../repository/massagemRepository.js";

export default async function alterarImagemMassagemService(id, caminhoImagem) {
    let linhasAfetadas = await alterarImagemMassagem(id, caminhoImagem);
    if (linhasAfetadas == 0) {
        throw new Error('nenhuma massagem foi alterado');
    }
}
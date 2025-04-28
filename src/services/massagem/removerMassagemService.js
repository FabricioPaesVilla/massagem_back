import { removerMassagem } from "../../repository/massagemRepository";


export default async function removerMassagemService(id) {
    let linhasAfetadas = await removerMassagem(id);
    if (linhasAfetadas == 0) {
        throw new Error('nenhuma massagem foi removido');
    }
}
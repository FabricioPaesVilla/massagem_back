import { removerAgenda } from "../../repository/agendaRepository.js";

export default async function removerMassagemService(id) {
    let linhasAfetadas = await removerAgenda(id);
    if (linhasAfetadas == 0) {
        throw new Error('nenhuma agenda foi removida');
    }
}
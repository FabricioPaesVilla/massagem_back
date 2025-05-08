import { alterarAgenda } from "../../repository/agendaRepository.js";
import { validarNovaAgenda } from "../../validations/agendaValidation.js";

export default async function AlterarAgendaService(id, agenda) {
    validarNovaAgenda(agenda);

    let linhasAfetadas = await alterarAgenda(id, agenda);
    if (linhasAfetadas == 0) {
        throw new Error('nenhuma agenda alterada');
    }
}
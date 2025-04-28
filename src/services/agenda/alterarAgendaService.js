import { alterarAgenda } from "../../repository/agendaRepository";
import { validarNovaAgenda } from "../../validations/agendaValidation";

export default async function AlterarAgendaService(id, agenda) {
    validarNovaAgenda(agenda);

    let linhasAfetadas = await alterarAgenda(id, agenda);
    if (linhasAfetadas == 0) {
        throw new Error('nenhuma agenda alterada');
    }
}
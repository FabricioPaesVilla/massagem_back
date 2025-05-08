import { adicionarAgenda, consultarAgendaPorDate } from "../../repository/agendaRepository.js";
import { validarAgendaIgual, validarNovaAgenda } from "../../validations/agendaValidation.js";

export default async function adicionarAgendaService(agenda) {
    validarNovaAgenda(agenda);

    let resistros = await consultarAgendaPorDate((agenda.agenda));
    validarAgendaIgual(resistros);
    
    let id = await adicionarAgenda(agenda);

    return id;
}
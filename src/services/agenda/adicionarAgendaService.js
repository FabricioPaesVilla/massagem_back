import { adicionarAgenda, consultarAgendaPorDia } from "../../repository/agendaRepository.js";
import { validarAgendaIgual, validarNovaAgenda } from "../../validations/agendaValidation.js";

export default async function adicionarAgendaService(agenda) {
    validarNovaAgenda(agenda);

    let resistros = await consultarAgendaPorDia((agenda.dia));
    validarAgendaIgual(resistros, agenda);
    
    let id = await adicionarAgenda(agenda);

    return id;
}
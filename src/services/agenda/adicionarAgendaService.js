import { adicionarAgenda, consultarAgendaPorDate } from "../../repository/agendaRepository";
import { validarAgendaIgual, validarNovaAgenda } from "../../validations/agendaValidation";

export default async function adicionarAlterarService(agenda) {
    validarNovaAgenda(agenda);

    let resistros = await consultarAgendaPorDate((agenda.agenda));
    validarAgendaIgual(resistros);
    
    let id = await adicionarAgenda(agenda);

    return id;
}
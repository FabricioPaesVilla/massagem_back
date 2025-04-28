import { consultarAgendaPorId } from "../../repository/agendaRepository";
import { validarAgendaUnico } from "../../validations/agendaValidation";

export default async function consultarMassagemPorIdService(id) {
    let registros = await consultarAgendaPorId(id);

    validarAgendaUnico(registros);
    
    let massagem = registros[0];
    return massagem;
}
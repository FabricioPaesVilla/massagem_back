import { consultarAgenda } from '../../repository/agendaRepository.js'

export default async function consultarAgendaService(date) {
    if (!date) {
        date = ' ';
    }

    let registros = await consultarAgenda(date);

    return registros;
}
import { consultarMassagem } from "../../repository/massagemRepository.js";

export default async function consultarMassagemService(titulo) {
    if (!titulo) {
        titulo = '';
    }
     let registros = await consultarMassagem(titulo);
    
   
    return registros;
}
import { horaAtual } from "./datetime.js";

global.criarErro = function criarErro(err){
    let obj = {
        erro: err.massage
    }

    return obj;
}

global.logErro = function logErro(err){
    console.log(horaAtual() + ' ERROR --> ' + err.massage);
    throw err;
}
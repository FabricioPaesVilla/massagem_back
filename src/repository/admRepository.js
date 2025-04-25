import connection from './connection.js'

export async function listar() {
    const comando = `SELECT email as email,
                            senha as senha,
                            nome as nome,
                            cpf as cpf
                            FROM tb_adm`
    let [info] = await connection.query(comando);
    return info;

}

export async function adicionar(adm) {
    const comando = `INSERT INTO tb_Adm (emai, senha, nome, cpf)
VALUES (?,?,?,?)`

    let [info] = await connection.query(comando, [adm.email, adm.senha, adm.nome, adm.cpf]);
    return info.insertId;
}

export async function alterar(email, adm) {
    const comando = `UPDATE tb_adm
                      SET senha = ?,
                      cpf = ?,
                      nome = ?
                      WHERE email = ?`
    let [info] = await connection.query(comando, [adm.senha, adm.nome, adm.cpf, email]);
    return info.affectedRows;
}

export async function remover(email) {
    const comando = `DELETE FROM tb_adm 
                     WHERE email = ?`
    let [info] = await connection.query(comando, [email]);
    return info.affectedRows;
}

export async function verificar(email, password) {
    const comando = `SELECT email as email,
                            senha as senha 
                            FROM tb_adm`
    let [info] = await connection.query(comando);

    let email_db = info.email;
    let senha = info.senha_adm;
     if (email == email_db && password == senha) {
        return true;
     } else {
        return false;
     }
}
import connection from './connection.js'

export async function listar() {
    const comando = `SELECT email_adm as email,
                            senha_adm as senha,
                            nm_adm as nome,
                            cpf_adm as cpf
                            FROM tb_adm`
    let [info] = await connection.query(comando);
    return info;

}

export async function adicionar(adm) {
    const comando = `INSERT INTO tb_Adm (email_adm, senha_adm, nm_adm, cpf_adm)
VALUES (?,?,?,?)`

    let [info] = await connection.query(comando, [adm.email, adm.senha, adm.nome, adm.cpf]);
    return info.insertId;
}

export async function alterar(email, adm) {
    const comando = `UPDATE tb_adm
                      SET senha_adm = ?,
                      cpf_adm = ?,
                      nm_adm = ?
                      WHERE email_adm = ?`
    let [info] = await connection.query(comando, [adm.senha, adm.nome, adm.cpf, email]);
    return info.affectedRows;
}

export async function remover(email) {
    const comando = `DELETE FROM tb_adm 
                     WHERE email_adm = ?`
    let [info] = await connection.query(comando, [email]);
    return info.affectedRows;
}

export async function verificar(email, password) {
    const comando = `SELECT email_adm as email,
                            senha_adm as senha 
                            FROM tb_adm`
    let [info] = await connection.query(comando);

    let email_db = info.email_adm;
    let senha = info.senha_adm;
     if (email == email_db && password == senha) {
        return true;
     } else {
        return false;
     }
}
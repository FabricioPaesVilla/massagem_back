import connection from './connection.js'

export async function listar() {
    const comando = `SELECT id_adm as id,
                          nm_adm as nome,
                          email_adm as email,
                          senha_adm as senha,
                          cpf_adm as cpf
                     FROM tb_cdadm`
    let [info] = await connection.query(comando);
    return info;

}

export async function adicionar(adm) {
    const comando = `INSERT INTO tb_cdAdm (nm_adm, email_adm, senha_adm, cpf_adm)
VALUES (?,?,?,?)`

    let [info] = await connection.query(comando, [adm.nome, adm.email, adm.senha, adm.cpf]);
    return info.insertId;
}

export async function alterar(id, adm) {
    const comando = `UPDATE tb_cdadm
                      SET nm_adm = ?,
                      email_adm = ?,
                      senha_adm = ?,
                      cpf_adm = ?
                      WHERE id_adm = ?`
    let [info] = await connection.query(comando, [adm.nome, adm.email, adm.senha, adm.cpf, id]);
    return info.affectedRows;
}

export async function remover(id) {
    const comando = `DELETE FROM tb_cdadm 
                     WHERE id_adm = ?`
    let [info] = await connection.query(comando, [id]);
    return info.affectedRows;
}
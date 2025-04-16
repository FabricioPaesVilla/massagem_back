import connection from './connection.js'

export async function listar() {
    const comando = `SELECT id_login_adm as id,
                          fk_email_adm as emailAdm,
                          senha_login_adm as senhAdm
                     FROM tb_loginadm`
    let [info] = await connection.query(comando);
    return info;

}

export async function adicionar(loginAdm) {
    const comando = `INSERT INTO tb_loginadm (fk_email_adm, senha_login_adm)
VALUES (?,?)`

    let [info] = await connection.query(comando, [loginAdm.emailAdm, loginAdm.senhAdm]);
    return info.insertId;
}

export async function alterar(id, loginAdm) {
    const comando = `UPDATE tb_loginadm
                      SET fk_email_adm = ?,
                      senha_login_adm = ?
                      WHERE id_login_adm = ?`
    let [info] = await connection.query(comando, [loginAdm.emailAdm, loginAdm.senhAdm, id]);
    return info.affectedRows;
}

export async function remover(id) {
    const comando = `DELETE FROM tb_loginadm
                     WHERE id_login_adm = ?`
    let [info] = await connection.query(comando, [id]);
    return info.affectedRows;
}
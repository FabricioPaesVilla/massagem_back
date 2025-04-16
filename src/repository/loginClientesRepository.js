import connection from './connection.js'

export async function listar() {
    const comando = `SELECT id_login_cliente as id,
                          fk_email_cliente as emailCliente,
                          senha_login_cliente as senhaCliente
                     FROM tb_logincliente`
    let [info] = await connection.query(comando);
    return info;

}

export async function adicionar(loginCli) {
    const comando = `INSERT INTO tb_logincliente (fk_email_cliente, senha_login_cliente)
VALUES (?,?)`

    let [info] = await connection.query(comando, [loginCli.emailCliente, loginCli.senhaCliente]);
    return info.insertId;
}

export async function alterar(id, loginCli) {
    const comando = `UPDATE tb_logincliente
                      SET fk_email_cliente = ?,
                      senha_login_cliente = ?
                      WHERE id_login_cliente = ?`
    let [info] = await connection.query(comando, [loginCli.emailCliente, loginCli.senhaCliente, id]);
    return info.affectedRows;
}

export async function remover(id) {
    const comando = `DELETE FROM tb_logincliente
                     WHERE id_login_cliente = ?`
    let [info] = await connection.query(comando, [id]);
    return info.affectedRows;
}
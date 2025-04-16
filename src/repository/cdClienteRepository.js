import connection from './connection.js'

export async function listar() {
    const comando = `SELECT id_cliente as id,
                          nm_cd_cliente as nome,
                          email_cd_cliente as email,
                          senha_cliente as senha,
                          cpf_cd_cliente as cpf
                     FROM tb_cdcliente`
    let [info] = await connection.query(comando);
    return info;

}

export async function adicionar(cliente) {
    const comando = `INSERT INTO  tb_cdCliente (nm_cd_cliente, email_cd_cliente, senha_cliente, cpf_cd_cliente)
VALUES (?,?,?,?)`

    let [info] = await connection.query(comando, [cliente.nome, cliente.email, cliente.senha, cliente.cpf]);
    return info.insertId;
}

export async function alterar(id, cliente) {
    const comando = `UPDATE tb_cdCliente
                      SET nm_cd_cliente = ?,
                      email_cd_cliente = ?,
                      senha_cliente = ?,
                      cpf_cd_cliente = ?
                      WHERE id_cliente = ?`
    let [info] = await connection.query(comando, [cliente.nome, cliente.email, cliente.senha, cliente.cpf, id]);
    return info.affectedRows;
}

export async function remover(id) {
    const comando = `DELETE FROM tb_cdCliente
                     WHERE id_cliente = ?`
    let [info] = await connection.query(comando, [id]);
    return info.affectedRows;
}
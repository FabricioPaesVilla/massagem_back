import connection from './connection.js'

export async function listar() {
    const comando = `SELECT id_cliente as id,
                          nm_cliente as nome,
                          email_cliente as email,
                          endereco as endereço,
                          telefone,
                          cpf_cliente as cpf
                     FROM tb_cliente`
    let [info] = await connection.query(comando);
    return info;

}

export async function adicionar(cliente) {
    const comando = `INSERT INTO  tb_cliente (nm_cliente, email_cliente, endereco, telefone, cpf_cliente)
VALUES (?,?,?,?,?)`

    let [info] = await connection.query(comando, [cliente.nome, cliente.email, cliente.endereço, cliente.cpf, cliente.telefone]);
    return info.insertId;
}

export async function alterar(id, cliente) {
    const comando = `UPDATE tb_cliente
                      SET nm_cliente = ?,
                      email_cliente = ?,
                      endereco = ?,
                      telefone = ?,
                      cpf_cliente = ?
                      WHERE id_cliente = ?`
    let [info] = await connection.query(comando, [cliente.nome, cliente.email, cliente.endereço, cliente.cpf, cliente.telefone, id]);
    return info.affectedRows;
}

export async function remover(id) {
    const comando = `DELETE FROM tb_cliente
                     WHERE id_cliente = ?`
    let [info] = await connection.query(comando, [id]);
    return info.affectedRows;
}
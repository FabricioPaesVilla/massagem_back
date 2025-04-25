import connection from './connection.js'

export async function listar() {
    const comando = `SELECT email as email,
                          nome as nome,
                          endereco as endereco,
                          telefone as telefone,
                          cpf as cpf
                     FROM tb_cliente`
    let [info] = await connection.query(comando);
    return info;

}

export async function adicionar(cliente) {
    const comando = `INSERT INTO  tb_cliente (email, nome, endereco, telefone, cpf)
VALUES (?,?,?,?,?)`

    let [info] = await connection.query(comando, [cliente.email, cliente.nome, cliente.endereco, cliente.telefone, cliente.cpf]);
    return info.insertId;
}

export async function alterar(email, cliente) {
    const comando = `UPDATE tb_cliente
                      SET nome = ?,
                      endereco = ?,
                      telefone = ?,
                      cpf = ?
                      WHERE email = ?`
    let [info] = await connection.query(comando, [cliente.nome, cliente.endereço, cliente.telefone, cliente.cpf, email]);
    return info.affectedRows;
}

export async function remover(email) {
    const comando = `DELETE FROM tb_cliente
                     WHERE email = ?`
    let [info] = await connection.query(comando, [email]);
    return info.affectedRows;
}
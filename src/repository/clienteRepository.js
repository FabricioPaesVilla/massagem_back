import connection from './connection.js'

export async function consultarCliente(nome) {
    const comando = `SELECT id_cliente as id
                            email_cliente as email,
                            nome as nome,
                            endereco as endereco,
                            telefone as telefone,
                            cpf as cpf
                        FROM tb_cliente
                        WHERE nome like ?`
    let resposta = await connection.query(comando, ['%' + nome + '%']);

    let registros = resposta[0];

    return registros;

}

export async function consultarClientePorId(id) {
    const comando = `SELECT id_cliente as id
                            email_cliente as email,
                            nome as nome,
                            endereco as endereco,
                            telefone as telefone,
                            cpf as cpf
                        FROM tb_cliente
                        WHERE id_cliente = ?`
    let resposta = await connection.query(comando, [id]);

    let registros = resposta[0];

    return registros;

}

export async function consultarClientePorEmail(email) {
    const comando = `SELECT id_cliente ,
                            email_cliente ,
                            nome ,
                            endereco ,
                            telefone ,
                            cpf 
                        FROM tb_cliente
                        WHERE email_cliente = ?`
    let resposta = await connection.query(comando, [email]);

    let registros = resposta[0];

    return registros;

}

export async function adicionarCliente(cliente) {
    const comando = `INSERT INTO  tb_cliente (email_cliente, nome, endereco, telefone, cpf)
VALUES (?,?,?,?,?)`

    let [info] = await connection.query(comando, [  
                                                    cliente.email_cliente, 
                                                    cliente.nome, 
                                                    cliente.endereco, 
                                                    cliente.telefone, 
                                                    cliente.cpf
                                                ]);
    return info.insertId;
}

export async function alterarCliente(id, cliente) {
    const comando = `UPDATE tb_cliente
                      SET email_cliente = ?, 
                      nome = ?,
                      endereco = ?,
                      telefone = ?,
                      cpf = ?
                      WHERE id_cliente = ?`
    let [info] = await connection.query(comando, [
                                                    cliente.email_cliente,
                                                    cliente.nome, 
                                                    cliente.endereço, 
                                                    cliente.telefone, 
                                                    cliente.cpf, 
                                                    id
                                                 ]);
    return info.affectedRows;
}

export async function removerCliente(id) {
    const comando = `DELETE FROM tb_cliente
                     WHERE id_cliente = ?`

    let resposta = await connection.query(comando, [id]);
    let info = resposta[0];
    
    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}
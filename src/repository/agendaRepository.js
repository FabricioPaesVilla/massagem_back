import connection from './connection.js'

export async function listar() {
    const comando = `SELECT id_agenda as id,
                          date as date,
                          endereco as endereço,
                          tipo_massagem,
                          valor,
                          fk_id_cliente as IdCliente
                     FROM tb_agenda`
    let [info] = await connection.query(comando);
    return info;
}

export async function adicionar(agenda) {
    const comando = `INSERT INTO tb_agenda (date, endereco, tipo_massagem, valor, fk_id_cliente)
VALUES (?,?,?,?,?)`

    let [info] = await connection.query(comando, [agenda.date, agenda.endereço, agenda.tipo_massagem, agenda.valor, agenda.IdCliente]);
    return info.insertId;
}

export async function alterar(id, agenda) {
    const comando = `UPDATE tb_agenda
                      SET date = ?,
                      endereco = ?,
                      tipo_massagem = ?,
                      valor = ?
                      fk_id_cliente = ?,
                      WHERE id_agenda = ?`
    let [info] = await connection.query(comando, [agenda.date, agenda.endereço, agenda.tipo_massagem, agenda.valor, agenda.IdCliente, id]);
    return info.affectedRows;
}

export async function remover(id) {
    const comando = `DELETE FROM tb_agenda 
                     WHERE id_agenda = ?`
    let [info] = await connection.query(comando, [id]);
    return info.affectedRows;
}
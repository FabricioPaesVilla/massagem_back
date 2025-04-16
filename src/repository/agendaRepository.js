import connection from './connection.js'

export async function listar() {
    const comando = `SELECT id_agenda as id,
                          dia,
                          hora,
                          fk_id_cliente as IdCliente,
                          endereco as endereço,
                          tipo_massagem,
                          valor
                     FROM tb_agenda`
    let [info] = await connection.query(comando);
    return info;

}

export async function adicionar(agenda) {
    const comando = `INSERT INTO tb_agenda (dia, hora, fk_id_cliente, endereco, tipo_massagem, valor)
VALUES (?,?,?,?,?,?)`

    let [info] = await connection.query(comando, [agenda.dia, agenda.hora, agenda.IdCliente, agenda.endereço, agenda.tipo_massagem, agenda.valor]);
    return info.insertId;
}

export async function alterar(id, agenda) {
    const comando = `UPDATE tb_agenda
                      SET dia = ?,
                      hora = ?,
                      fk_id_cliente = ?,
                      endereco = ?,
                      tipo_massagem = ?,
                      valor = ?
                      WHERE id_agenda = ?`
    let [info] = await connection.query(comando, [agenda.dia, agenda.hora, agenda.IdCliente, agenda.endereço, agenda.tipo_massagem, agenda.valor, id]);
    return info.affectedRows;
}

export async function remover(id) {
    const comando = `DELETE FROM tb_agenda 
                     WHERE id_agenda = ?`
    let [info] = await connection.query(comando, [id]);
    return info.affectedRows;
}
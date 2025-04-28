import connection from './connection.js'

export async function consultarAgenda(date) {
    const comando = `SELECT id_agenda as id,
                          date as date,
                          endereco as endereco,
                          tipo_massagem as tipo_massagem,
                          valor as valor,
                          id_cliente as id_cliente
                     FROM tb_agenda
                     WHERE date like ?`

    let resposta = await connection.query(comando, ['%' + date + '%']);

    let registros = resposta[0];

    return registros;
}

export async function consultarAgendaPorId(id) {
    const comando = `SELECT id_agenda as id,
                          date as date,
                          endereco as endereco,
                          tipo_massagem as tipo_massagem,
                          valor as valor,
                          id_cliente as id_cliente
                     FROM tb_agenda
                     WHERE id_agenda = ?`

    let resposta = await connection.query(comando, [id]);

    let registros = resposta[0];

    return registros;
}

export async function consultarAgendaPorDate(date) {
    const comando = `SELECT id_agenda as id,
                          date as date,
                          endereco as endereco,
                          tipo_massagem as tipo_massagem,
                          valor as valor,
                          id_cliente as id_cliente
                     FROM tb_agenda
                     WHERE date = ?`

    let resposta = await connection.query(comando, [date]);

    let registros = resposta[0];

    return registros;
}

export async function adicionarAgenda(agenda) {
    const comando = `INSERT INTO tb_agenda (date, endereco, tipo_massagem, valor, id_cliente)
VALUES (?,?,?,?,?)`

    let [info] = await connection.query(comando, [
                                                    agenda.date, 
                                                    agenda.endereço, 
                                                    agenda.tipo_massagem, 
                                                    agenda.valor, 
                                                    agenda.id_cliente
                                                 ]);
    return info.insertId;
}

export async function alterarAgenda(id, agenda) {
    const comando = `UPDATE tb_agenda
                      SET date = ?,
                      endereco = ?,
                      tipo_massagem = ?,
                      valor = ?
                      id_cliente = ?,
                      WHERE id_agenda = ?`
    let [info] = await connection.query(comando, [
                                                    agenda.date, 
                                                    agenda.endereço, 
                                                    agenda.tipo_massagem, 
                                                    agenda.valor, 
                                                    agenda.id_cliente, 
                                                    id
                                                 ]);
    return info.affectedRows;
}

export async function removerAgenda(id) {
    const comando = `DELETE FROM tb_agenda 
                     WHERE id_agenda = ?`

    let resposta = await connection.query(comando, [id]);
    let info = resposta[0];
    
    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}
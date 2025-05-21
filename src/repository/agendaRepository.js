import connection from './connection.js'

export async function consultarAgenda(dia) {
    const comando = `SELECT id_agenda,
                          dia,
                          hora,
                          endereco,
                          tipo_massagem,
                          nome_cliente 
                     FROM tb_agenda
                     WHERE dia like ?`

    let resposta = await connection.query(comando, ['%' + dia + '%']);

    let registros = resposta[0];

    return registros;
}

export async function consultarAgendaPorId(id) {
    const comando = `SELECT id_agenda,
                          dia,
                          hora,
                          endereco,
                          tipo_massagem,
                          nome_cliente 
                     FROM tb_agenda
                     WHERE id_agenda = ?`

    let resposta = await connection.query(comando, [id]);

    let registros = resposta[0];

    return registros;
}

export async function consultarAgendaPorDia(dia) {
    const comando = `SELECT id_agenda,
                          dia,
                          hora,
                          endereco,
                          tipo_massagem,
                          nome_cliente 
                     FROM tb_agenda
                     WHERE dia = ?`

    let resposta = await connection.query(comando, [dia]);

    let registros = resposta[0];

    return registros;
}

export async function adicionarAgenda(agenda) {
    const comando = `INSERT INTO tb_agenda (dia, hora, endereco, tipo_massagem, nome_cliente)
VALUES (?,?,?,?,?)`

    let [info] = await connection.query(comando, [
                                                    agenda.dia,
                                                    agenda.hora, 
                                                    agenda.endereco, 
                                                    agenda.tipo_massagem,  
                                                    agenda.nome_cliente
                                                 ]);
    return info.insertId;
}

export async function alterarAgenda(id, agenda) {
    const comando = `UPDATE tb_agenda
                      SET dia = ?,
                      hora = ?
                      endereco = ?,
                      tipo_massagem = ?,
                      nome_cliente = ?
                      WHERE id_agenda = ?`
    let [info] = await connection.query(comando, [
                                                    agenda.dia,
                                                    agenda.hora, 
                                                    agenda.endereço, 
                                                    agenda.tipo_massagem, 
                                                    agenda.nome_cliente, 
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
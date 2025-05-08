import connection from "./connection.js";

export async function consultarMassagem(titulo) {
    const comando = `
                        SELECT id_massagem,
                            titulo,
                            descricao,
                            img
                        FROM tb_massagem
                        WHERE titulo like ?
                        `
                        console.log("b")    
    let resposta = await connection.query(comando, ['%' + titulo + '%']);
    console.log("c")
    let registros = resposta[0];
    
    return registros;
}

export async function consultarMassagemPorId(id) {
    const comando = `SELECT id_massagem as id,
                            titulo as titulo,
                            descricao as descricao,
                            img as img
                            FROM tb_massagem
                            WHERE id = ?`
    
    let resposta = await connection.query(comando, [id]);
    
    let registros = resposta[0];
    
    return registros;
}

export async function consultarMassagemPorTitulo(titulo) {
    const comando = ` 
                        SELECT id_massagem as id,
                            titulo as titulo,
                            descricao as descricao,
                            img as img
                        FROM tb_massagem
                        WHERE titulo = ?`
    
                        
    
    let resposta = await connection.query(comando, [titulo]);
    
    let registros = resposta[0];
    
    return registros;
}

export async function adicionarMassagem(massagem) {
    const comando = `
                    INSERT INTO tb_massagem (titulo, descricao)
                        VALUES (?,?)`

    let [info] = await connection.query(comando, [  massagem.titulo, 
                                                    massagem.descricao
                                                ]);
    return info.insertId;
}

export async function alterarMassagem(id, massagem) {
    const comando = `
                    UPDATE tb_massagem
                      SET titulo = ?,
                      descricao = ?
                      WHERE id_massagem = ?`
    let resposta = await connection.query(comando, [  
                                                    massagem.titulo, 
                                                    massagem.descricao,  
                                                    id
                                                 ]);
    
    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}

export async function removerMassagem(id) {
    const comando = `
                    DELETE FROM tb_massagem 
                     WHERE id_massagem = ?`
    
    let resposta = await connection.query(comando, [id]);
    let info = resposta[0];
    
    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas
}

export async function alterarImagemMassagem(id, massagem) {
    const comando = `
                    UPDATE tb_massagem
                      SET img = ?
                      WHERE id_massagem = ?`
    let resposta = await connection.query(comando, [ massagem.img, id ]);
    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}
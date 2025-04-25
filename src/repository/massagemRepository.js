import connection from "./connection";

export async function listar() {
    const comando = `SELECT titulo as titulo,
                            descricao as descricao,
                            img as img
                            FROM tb_massagem`
    let [info] = await connection.query(comando);
    return info;
}

export async function adicionar(massagem) {
    const comando = `INSERT INTO tb_massagem (titulo, descricao, img)
VALUES (?,?,?)`

    let [info] = await connection.query(comando, [massagem.titulo, massagem.descricao, massagem.img]);
    return info.insertId;
}

export async function alterar(titulo, massagem) {
    const comando = `UPDATE tb_massagem
                      SET titulo = ?,
                      descricao = ?,
                      img = ?
                      WHERE titulo = ?`
    let [info] = await connection.query(comando, [massagem.titulo, massagem.descricao, massagem.img, titulo]);
    return info.affectedRows;
}

export async function remover(titulo) {
    const comando = `DELETE FROM tb_massagem 
                     WHERE titulo = ?`
    let [info] = await connection.query(comando, [titulo]);
    return info.affectedRows;
}
CREATE DATABASE massagemdb DEFAULT CHARACTER SET = 'utf8mb4';
USE massagemdb;
--lembando q a parte do login vai ser feito na proxima aula com o professor 
CREATE TABLE tb_adm (
    email_adm VARCHAR(100) PRIMARY KEY NOT NULL,
    senha VARCHAR(100) NOT NULL
);
DROP TABLE tb_adm;
CREATE TABLE tb_massagem (
    id_massagem INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    img VARCHAR(100) 
);

SELECT id_massagem, titulo, descricao FROM tb_massagem;

INSERT INTO tb_massagem (titulo, descricao) VALUES ("a","aa");

SELECT id_massagem,
                            titulo,
                            descricao,
                            img
                        FROM tb_massagem
                        WHERE titulo like "a";


DROP TABLE tb_massagem;
CREATE TABLE tb_cliente(
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    email_cliente VARCHAR(100) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(100),
    telefone VARCHAR(100) NOT NULL,
    cpf VARCHAR(100) NOT NULL
);
CREATE TABLE tb_agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATETIME NOT NULL, 
    endereco VARCHAR(100) NOT NULL,
    id_massagem INT NOT NULL,
    valor DOUBLE NOT NULL,
    id_cliente int NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente),
    FOREIGN KEY (id_massagem) REFERENCES tb_massagem(id_massagem)
);
/* DATETIME: '2025-04-27 15:00:00' */

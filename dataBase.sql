CREATE DATABASE massagemdb DEFAULT CHARACTER SET = 'utf8mb4';
USE massagemdb;
DELETE DATABASE massagemdb;
--lembando q a parte do login vai ser feito na proxima aula com o professor 
CREATE TABLE tb_adm (
    email_adm VARCHAR(100) PRIMARY KEY NOT NULL,
    senha VARCHAR(100) NOT NULL
);
DROP TABLE tb_adm;

-----------------------------


CREATE TABLE tb_massagem (
    id_massagem INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    img VARCHAR(100) 
);

CREATE TABLE tb_cliente(
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    email_cliente VARCHAR(100) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(100),
    telefone VARCHAR(100) NOT NULL,
    cpf VARCHAR(100) NOT NULL
);

CREATE TABLE tb_agenda (
    id_agenda INT AUTO_INCREMENT PRIMARY KEY,
    dia DATE NOT NULL,
    hora TIME NOT NULL, 
    endereco VARCHAR(100) NOT NULL,
    tipo_massagem VARCHAR(100) NOT NULL,
    id_cliente int NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
);






DROP TABLE tb_massagem;
DROP TABLE tb_agenda;
INSERT INTO tb_agenda (date, endereco, id_massagem, valor, id_cliente)
VALUES ('2025-04-27 15:00:00',"",1,1,1);
INSERT INTO  tb_cliente (email_cliente, nome, endereco, telefone, cpf)
VALUES ("a","b","c","d","e");
SELECT id_agenda ,date ,endereco ,id_massagem,valor ,id_cliente 
FROM tb_agenda;



/* DATETIME: '2025-04-27 15:00:00' */
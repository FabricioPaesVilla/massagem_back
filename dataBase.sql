CREATE DATABASE massagemdb 
    DEFAULT CHARACTER SET = 'utf8mb4';

USE massagemdb;
--lembando q a parte do login vai ser feito na proxima aula com o professor 
CREATE TABLE tb_adm (
    email VARCHAR(100) PRIMARY KEY,
    senha VARCHAR(100) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(20) NOT NULL
);

DROP TABLE tb_adm;

CREATE TABLE tb_massagem (
    titulo VARCHAR(100) PRIMARY KEY NOT NULL,
    descricao TEXT NOT NULL,
    img LONGBLOB NOT NULL
);

CREATE TABLE tb_cliente(
    email VARCHAR(100) PRIMARY KEY,
    nome VARCHAR(100),
    endereco VARCHAR(100),
    telefone VARCHAR(100),
    cpf VARCHAR(100)
);

CREATE TABLE tb_agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE,
    endereca VARCHAR(100),
    tipo_massagem JSON,
    valor DOUBLE,
    email VARCHAR(100),
    FOREIGN KEY (email) REFERENCES tb_cliente(email)
);

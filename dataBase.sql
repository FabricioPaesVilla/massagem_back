CREATE DATABASE massagemdb 
    DEFAULT CHARACTER SET = 'utf8mb4';

USE massagemdb;

CREATE TABLE tb_adm (
    email VARCHAR(255) PRIMARY KEY,
    senha VARCHAR(255) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(20) NOT NULL,
    logado BOOLEAN NOT NULL
);

DROP TABLE tb_adm;
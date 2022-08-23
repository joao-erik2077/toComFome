CREATE DATABASE IF NOT EXISTS tocomfome;
USE tocomfome;

CREATE TABLE IF NOT EXISTS restaurantes (
   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   cnpj VARCHAR(18) NOT NULL,
   nome VARCHAR(255) NOT NULL,
   telefone VARCHAR(13)
);

CREATE TABLE IF NOT EXISTS produtos (
   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   nome VARCHAR(255) NOT NULL,
   preco DECIMAL(6, 2) NOT NULL,
   restaurante_id INT NOT NULL
);
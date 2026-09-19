CREATE DATABASE IF NOT EXISTS ulti_gas;


USE ulti_gas;

CREATE TABLE usuario(
senha_hash VARCHAR (100) NOT NULL,
idusuario INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
email VARCHAR(75) NOT NULL UNIQUE

);

CREATE TABLE cliente (
 idcliente INT PRIMARY KEY AUTO_INCREMENT, 
 CPF CHAR(11) NOT NULL UNIQUE, 
 nome VARCHAR(50) NOT NULL, 
 qntde_pontos INT UNSIGNED NOT NULL DEFAULT(0) ,
 idusuario INT UNIQUE,
 CONSTRAINT fk_cliente_usuario 
 FOREIGN KEY (idusuario) REFERENCES usuario(idusuario)

);

CREATE TABLE produto (
idproduto INT PRIMARY KEY AUTO_INCREMENT,
preco_litro DECIMAL(10,2) NOT NULL CHECK (preco_litro > 0),
nome ENUM ('gasolina', 'etanol', 'diesel') NOT NULL

);

CREATE TABLE veiculo (
    idveiculo INT PRIMARY KEY AUTO_INCREMENT,
    placa CHAR(7) NOT NULL UNIQUE,
    idcliente INT NOT NULL,
    CONSTRAINT fk_cliente_veiculo 
    FOREIGN KEY (idcliente) REFERENCES cliente(idcliente),
    cor VARCHAR(25) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano_modelo CHAR(4) NOT NULL,
    chassi CHAR(17),
    tipo_combustivel ENUM ('gasolina', 'etanol', 'diesel','flex') NOT NULL

);

CREATE TABLE endereco(
    idendereco INT PRIMARY KEY AUTO_INCREMENT,
    bairro VARCHAR(45) NOT NULL,
    numero CHAR(5) NOT NULL,
    cep CHAR(8) NOT NULL,
    rua VARCHAR(200) NOT NULL,
    complemento VARCHAR(75),
    idcliente INT NOT NULL,
    CONSTRAINT fk_cliente_endereco
    FOREIGN KEY (idcliente) REFERENCES cliente(idcliente)

);

CREATE TABLE telefone(
    idtelefone INT PRIMARY KEY AUTO_INCREMENT,
    numero CHAR(11) NOT NULL,
    ddd VARCHAR(3) NOT NULL,
    idcliente INT NOT NULL,
    CONSTRAINT fk_cliente_telefone
    FOREIGN KEY (idcliente) REFERENCES cliente(idcliente)

);

CREATE TABLE venda(
    idvenda INT PRIMARY KEY AUTO_INCREMENT,
    data_venda DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status_venda ENUM ('aprovado', 'reprovado') NOT NULL,
    forma_pagamento ENUM('dinheiro', 'debito', 'credito', 'pix', 'carteira_ulti_gas') NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL CHECK (valor_total >=0),
    valor_desconto DECIMAL(10,2) NOT NULL CHECK (valor_desconto >=0),
    valor_final  DECIMAL(10,2) NOT NULL CHECK (valor_final >=0),
    pontos_ganho INT UNSIGNED NOT NULL DEFAULT 0,
    pontos_usados INT UNSIGNED NOT NULL DEFAULT 0,
    idcliente INT NOT NULL,
    CONSTRAINT fk_cliente_venda
    FOREIGN KEY (idcliente) REFERENCES cliente(idcliente),
    idveiculo INT NOT NULL,
    CONSTRAINT fk_veiculo_venda
    FOREIGN KEY (idveiculo) REFERENCES veiculo(idveiculo),
    CONSTRAINT fk_veiculo_venda
    FOREIGN KEY (idveiculo) REFERENCES veiculo(idveiculo),
    CONSTRAINT chk_desconto_limite
    CHECK (valor_desconto <= valor_total),
    CONSTRAINT chk_valor_final
    CHECK (valor_final = valor_total - valor_desconto)

);



CREATE TABLE item (
    iditem INT PRIMARY KEY AUTO_INCREMENT,
    qntde DECIMAL(10,2) NOT NULL CHECK (qntde >=0),
    preco_unitario DECIMAL(10,2) NOT NULL CHECK (preco_unitario >0),
    subtotal DECIMAL(10,2) NOT NULL CHECK (subtotal >=0),
    idproduto INT NOT NULL,
    CONSTRAINT fk_produto_item
    FOREIGN KEY (idproduto) REFERENCES produto(idproduto),
    idvenda INT NOT NULL, 
    CONSTRAINT fk_venda_item
    FOREIGN KEY (idvenda) REFERENCES venda(idvenda)
);


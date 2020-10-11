### 🏦🎲 Nesse capitulo do Curso, não irei escrever nenhum código no VSCODE pois todos as ações foram feitas através da linha de comando do mysql utilizando o cmd. 

#### Para acessar o CMD é necessário utilizar o seguinte comando: 

> mysql -h host-onde-o-sv-está-hospedado -u usuario -p password 

#### Comandos para visualizar, criar e acessar um banco de dados: 

- show databases; (visualizar todos os bancos)
- CREATE DATABASE nome-do-banco (criar um novo banco de dados)
- use nome-do-banco (acessar/utilizar o banco de dados)

#### Verificar tabelas existentes e/ou criar novas tabelas

- show tables (visualiza as tabelas)
- create TABLE nome-tabela 

#### Criando colunas nas tabelas

- nome-coluna tipo-coluna, (nome VARCHAR(200))
- nome-columa tipo-coluna (idade INT(50))

#### Para visualizar a estrutura da tabela utilize o seguinte código: 

- describe nome-tabela
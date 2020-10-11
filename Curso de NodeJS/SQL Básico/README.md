### 🎲 Nesse capitulo do Curso, não irei escrever nenhum código no VSCODE pois todos as ações foram feitas através da linha de comando do mysql utilizando o cmd. 

<hr>

#### Para acessar o CMD é necessário utilizar o seguinte comando: 

> mysql -h host-onde-o-sv-está-hospedado -u usuario -p password 

<hr>

#### Comandos para visualizar, criar e acessar um banco de dados: 

- show databases; (visualizar todos os bancos)
- CREATE DATABASE nome-do-banco (criar um novo banco de dados)
- use nome-do-banco (acessar/utilizar o banco de dados)

<hr>

#### Verificar tabelas existentes e/ou criar novas tabelas

- show tables (visualiza as tabelas)
- create TABLE nome-tabela 

<hr>

#### Criando colunas nas tabelas

> CREATE TABLE nome-tabela (nome-coluna, tipoDoDado (qntdCaracteres))

#### Exemplo:

```

CREATE TABLE usuarios (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
)

```



<hr>

#### Para visualizar a estrutura da tabela utilize o seguinte código: 

- describe nome-tabela

<hr>

#### Adicionando valores nas tabelas 

> insert into nome-tabelas (campos onde os dados serão inseridos EM ORDEM!) VALUES ();

#### Exemplo:

```

insert into usuarios(nome, email, idade) values(
    "Mateus Lima",
    "mateus@meuemail.com",
    22
)

```

#### Listar os Dados:

- SELECT * from nome-tabelas
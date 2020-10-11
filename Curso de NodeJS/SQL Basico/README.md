### 🎲 Nesse capitulo do Curso, não irei escrever nenhum código no VSCODE pois todos as ações foram feitas através da linha de comando do mysql utilizando o cmd!

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

<hr>

#### Listar os Dados ded uma determinada tabela:

- SELECT * from nome-tabelas

<hr>

#### Fazendo uma consulta Especifica no Banco de Dados:
#### Exemplo: Listando usuarios apenas com idades maiores que 20: 

- SELECT * from nome-tabela WHERE nome-coluna condicao
- SELECT * from usuarios WHERE idade >= 18
- SELECT * from usuarios WHERE nome = "Mateus Lima"

<hr>

#### Deletando um registro do banco de dados: 

- DELETE from nome-tabela (irá apagar a tabela inteira)
- DELETE FROM nome-tabela WHERE coluna condição 

#### Exemplo: 

``` 
DELETE FROM usuarios WHERE nome = "Pedro Bernardo" 

```

<hr>

#### Atualizando dados especificos dentro de uma tabela: 

- UPDATE nome-tabelas SET nome-coluna = novo-valor WHERE condição

#### Exemplo:

``` UPDATE usuarios SET nome = "Mateus Leite" WHERE nome = "Mateus Lima" ```

#### Leia-se (Altere para Mateus Leite na coluna NOME da tabela USUARIOS o registro que tem o nome correspondente a Mateus Lima)

### ☕ Bons Estudos! :)
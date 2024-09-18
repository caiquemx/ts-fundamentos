# TS Fundamentos

Este projeto é uma aplicação back-end desenvolvida em TypeScript, utilizando o Prisma para gerenciar a base de dados com MySQL, Express.js para rotas e a biblioteca Nodemon para facilitar o desenvolvimento. O projeto segue boas práticas de tipagem e modelagem de dados.

## Tecnologias Utilizadas
* **Node.js**
* **TypeScript**
* **Express.js**
* **Prisma**
* **MySQL**

  <img src="https://github.com/user-attachments/assets/bc00d326-6812-4bcd-8fac-3ef210c495ec" width="36">
  <img src="https://github.com/user-attachments/assets/3bd570cd-d3df-43fe-afd0-3bc2840f9c0b" width="36">
  <img src="https://github.com/user-attachments/assets/8e79b395-3743-45a5-9a6a-9b54c4a28693" width="36">
  <img src="https://github.com/user-attachments/assets/31d55f2b-35b7-4bbb-958a-13e1cd84e183" width="36">
  <img src="https://github.com/user-attachments/assets/278578e9-217c-477d-bc4f-6e45ddb51a99" width="36" >


## Requisitos

* Node.js (versão 14 ou superior)
* MySQL

## Instalação

1. Clone o repositório:
  ```bash
  git clone [https://github.com/seu-usuario/ts_fundamentos.git](https://github.com/seu-usuario/ts_fundamentos.git)
  ```
   
2. Instale as dependências:
  ```bash
  npm install
  ```

3. Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto com as seguintes informações:
  ```makefile
  DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
  ```

4. Execute as migrations e seed do Prisma para criar as tabelas e popular o banco de dados:
  ```bash
  npm run dbup
  ```

## Scripts Disponíveis
* npm run dev: Inicia o servidor em ambiente de desenvolvimento com nodemon e tsx.
* npm run dbup: Executa as migration e a seed para popular o banco de dados.
* npm run dbreset: Executa o reset do banco de dados, exclui todos os dados e popula o banco de dados com os dados originais.

## Como Executar
Para rodar a aplicação em ambiente de desenvolvimento:
  ```bash
  npm run dev
  ```

Para gerar o código tipado do Prisma:
  ```bash
  npx prisma generate
  ```

## Prisma
Para trabalhar com o Prisma, você pode utilizar os seguintes comandos:

Gerar o Client Prisma:
  ```bash
  npx prisma generate
  ```

Rodar Migrações:
  ```bash
  npx prisma migrate dev
  ```

Visualizar o Banco de Dados no Prisma Studio:
  ```bash
  npx prisma studio
  ```

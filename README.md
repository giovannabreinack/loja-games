# 🕹️ Backend Loja de Games

Este é o projeto de backend da **Loja de Games**, desenvolvido com **NestJS** e **TypeScript**. A aplicação permite o gerenciamento completo de produtos e categorias de jogos, com estrutura modular e seguindo boas práticas de desenvolvimento. A API é testada via **Insomnia** e utiliza **MySQL** como banco de dados.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)
- [Insomnia](https://insomnia.rest/) (testes de API)
- [NPM](https://www.npmjs.com/) (gerenciador de pacotes)

## 📦 Estrutura do Projeto

```
src/
├── categoria/
│   ├── categoria.controller.ts
│   ├── categoria.entity.ts
│   ├── categoria.module.ts
│   ├── categoria.service.ts
├── produto/
│   ├── produto.controller.ts
│   ├── produto.entity.ts
│   ├── produto.module.ts
│   ├── produto.service.ts
├── app.module.ts
```

## 🛠️ Funcionalidades

### ✅ CRUD de Produtos

- `GET /produtos`: Lista todos os produtos
- `GET /produtos/:id`: Retorna um produto por ID
- `POST /produtos`: Cadastra um novo produto
- `PUT /produtos/:id`: Atualiza um produto existente
- `DELETE /produtos/:id`: Deleta um produto
- `GET /produtos/nome/:nome`: Busca produtos por nome

### ✅ CRUD de Categorias

- `GET /categorias`: Lista todas as categorias
- `GET /categorias/:id`: Retorna uma categoria por ID
- `POST /categorias`: Cadastra uma nova categoria
- `PUT /categorias/:id`: Atualiza uma categoria existente
- `DELETE /categorias/:id`: Deleta uma categoria
- `GET /categorias/nome/:nome`: Busca categorias por nome

## 🔗 Relacionamento

O projeto implementa o relacionamento:

- **Categoria (1)** → **(N) Produtos**  
Cada produto pertence a uma única categoria, enquanto uma categoria pode ter vários produtos.

## ⚙️ Configuração do Banco de Dados

A conexão com o MySQL é realizada em `app.module.ts` usando `TypeOrmModule.forRoot`:

```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'gengames',
  entities: [Produto, Categoria],
  synchronize: true,
})
```

## 🧪 Testes da API com Insomnia

Os testes dos endpoints foram realizados com o **Insomnia**.  
Para testar:

1. Instale o Insomnia
2. Importe os endpoints ou crie manualmente as rotas listadas acima
3. Teste os métodos `GET`, `POST`, `PUT`, e `DELETE`

## 🗃️ Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/giovannabreinack/loja-games.git
cd loja-games

# Instale as dependências
npm install

# Rode o servidor
npm run start:dev
```


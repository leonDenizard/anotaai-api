🇬🇧 [English version](README-en.md)

## 📜 Enunciado do Desafio

O desafio consiste em construir uma API que:

1. Crie uma rota para **incrementar o número de acessos**;
2. Crie uma rota para **consultar o número de acessos**;
3. Crie uma rota para **criar um usuário**;
4. Crie uma rota para **visualizar as informações de um usuário**.

### Bônus
- Disponibilizar o projeto em um servidor.
- Escrever testes (unitários, integração, e2e).
- Documentação (OpenAPI/Swagger, fluxogramas, etc).

### Instruções
- Utilizar versionamento seguindo o padrão Conventional Commits
- Seguir práticas de clean code
- Aplicar segurança

---

## 🚀 Tecnologias e Stack Utilizadas

- **Node.js + Express** → servidor e rotas da API.  
- **TypeScript** → tipagem estática e segurança em tempo de compilação.  
- **MongoDB (Mongoose)** → persistência dos dados.  
- **bcrypt** → hash de senha e segurança.  
- **Jest + Supertest** → testes unitários e de integração.  
- **Swagger (OpenAPI)** → documentação da API.  
- **dotenv** → variáveis de ambiente.
- **Docker** → containerização da API.  

---

## 📂 Estrutura do Projeto

```
src/
├── controllers/ # Controladores das rotas
├── database/ # Conexão com MongoDB
├── docs/ # Documentação Swagger
├── models/ # Modelos do banco (Mongoose)
├── routes/ # Definição das rotas
├── services/ # Lógica de negócio
├── tests/ # Testes automatizados
├── utils/ # Funções utilitárias
app.ts # Inicialização do Express
server.ts # Ponto de entrada do projeto

```
---

## 🔗 Rotas da API

### **Visitas**
| Método | Endpoint       | Descrição                     |
|--------|----------------|-------------------------------|
| POST   | `/api/visits`  | Conta um acesso (incrementa) |
| GET    | `/api/visits`  | Retorna o total de acessos    |

### **Usuários**
| Método | Endpoint          | Descrição                    |
|--------|------------------|------------------------------|
| POST   | `/api/users`      | Cria um novo usuário         |
| GET    | `/api/users`      | Lista todos os usuários      |
| GET    | `/api/users/:id`  | Busca usuário pelo ID        |

> A documentação completa está disponível via Swagger:  
> https://anotaai-api-q5ar.onrender.com/api/docs/

---

## Como Rodar Localmente

```bash
git clone https://github.com/leonDenizard/anotaai-api.git

cd anota-api

npm install

npm run dev
```

## ⚙️ Configuração do Ambiente (.env)

Para rodar a aplicação, é necessário criar um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Porta em que a API irá rodar
PORT=3000

# URI do MongoDB (substitua usuário, senha e nome do banco)
MONGO_URI=mongodb+srv://root:senha@banco

# URL base da API (para local ou produção)
BASE_URL=http://localhost:3000/api
# ou
# BASE_URL=https://anotaai-api-q5ar.onrender.com/api

# Ambiente da aplicação
NODE_ENV=development
# ou
# NODE_ENV=production
```

## Como Rodar testes
```bash
npm test
```
## 🐳 Docker

Este projeto também está containerizado com **Docker**, facilitando a execução em qualquer ambiente.

### Pré-requisitos
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Rodando com Docker
Para subir o projeto em container, é necessário ter um arquivo `.env` válido na raiz do projeto, com as variáveis de ambiente configuradas, depois rode:


```bash
docker-compose up --build

```

## Deploy

API encontra-se pronta para uso no Render

`https://anotaai-api-q5ar.onrender.com/api/visits`

`https://anotaai-api-q5ar.onrender.com/api/users`

---

A API também está rodando na AWS numa EC2:

`http://18.223.180.63:3000/api/visits`

`http://18.223.180.63:3000/api/users` 

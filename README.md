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
- **docker** → containerização da API.  

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
> [http://localhost:3000/docs](http://localhost:3000/docs)

---

## Como Rodar Localmente

```bash
git clone https://github.com/leonDenizard/anotaai-api.git

cd anota-api

npm install

npm run dev
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
Para subir o projeto em container:


```bash
docker-compose up --build

```

## Deploy

A API também está rodando na AWS EC2:

`http://18.191.177.83:3000/api/visits` 
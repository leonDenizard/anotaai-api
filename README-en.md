🇧🇷 [Versão em Português](README.md)

# 📊 Anota AI - API for Access and Users

This project was developed as part of a **technical challenge**.  
The goal is to build an API using **Node.js + TypeScript** that:  

- Tracks the number of website accesses.  
- Allows user creation and retrieval.  
- Follows clean code practices, semantic versioning, and proper documentation.  

---

## 📜 Challenge Statement

The challenge consists of building an API that:

1. Creates a route to **increment the number of visits**;  
2. Creates a route to **get the total number of visits**;  
3. Creates a route to **create a new user**;  
4. Creates a route to **view a user's information**.  

### Bonus
- Deploy the project to a server.  
- Write tests (unit, integration, e2e).  
- Documentation (OpenAPI/Swagger, diagrams, etc).  

### Instructions
- Use versioning following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) standard  
- Follow [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript) practices  
- Implement security measures  

---

## 🚀 Technologies and Stack

- **Node.js + Express** → server and API routes.  
- **TypeScript** → static typing and compile-time safety.  
- **MongoDB (Mongoose)** → data persistence.  
- **bcrypt** → password hashing and security.  
- **Jest + Supertest** → unit and integration testing.  
- **Swagger (OpenAPI)** → API documentation.  
- **dotenv** → environment variables.  
- **Docker** → containerization of the API.  

---

## 📂 Project Structure
```
src/
├── controllers/ # Route controllers  
├── database/ # MongoDB connection
├── docs/ # Swagger documentation
├── models/ # Database models (Mongoose)
├── routes/ # Route definitions
├── services/ # Business logic
├── tests/ # Automated tests
├── utils/ # Utility functions
app.ts # Express app initialization
server.ts # Entry point of the project

```
---

## 🔗 API Routes

### **Visits**
| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| POST   | `/api/visits`  | Counts a visit (increments) |
| GET    | `/api/visits`  | Returns the total visits     |

### **Users**
| Method | Endpoint          | Description                |
|--------|------------------|----------------------------|
| POST   | `/api/users`      | Creates a new user         |
| GET    | `/api/users`      | Lists all users            |
| GET    | `/api/users/:id`  | Retrieves a user by ID     |

> Full API documentation is available via Swagger:  
> [https://anotaai-api-q5ar.onrender.com/api/docs/](https://anotaai-api-q5ar.onrender.com/api/docs/)

---

## ⚡ Running Locally

```bash
git clone https://github.com/leonDenizard/anotaai-api.git
cd anota-api
npm install
npm run dev

```
## ⚙️ Environment Configuration (.env)

```
# Port for the API
PORT=3000

# MongoDB URI (replace user, password, and database name)
MONGO_URI=mongodb+srv://root:password@database

# Base URL of the API (local or production)
BASE_URL=http://localhost:3000/api
# or
# BASE_URL=https://anotaai-api-q5ar.onrender.com/api

# Application environment
NODE_ENV=development
# or
# NODE_ENV=production
```
## 🧪 Running Tests
```
npm test
```

## 🐳 Docker

This project is containerized with Docker, making it easy to run in any environment.

### Pré-requisitos
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running with Docker
You must have a valid .env file in the project root before running Docker. Then execute:


```bash
docker-compose up --build
```
## Deploy

The API is ready for use on Render:

`https://anotaai-api-q5ar.onrender.com/api/visits`
`https://anotaai-api-q5ar.onrender.com/api/users`

---

The API is also running on AWS EC2:

`http://18.191.177.83:3000/api/visits`
`http://18.191.177.83:3000/api/users` 
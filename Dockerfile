# Etapa 1: Build
FROM node:20 AS builder

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json tsconfig.json ./

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Build do projeto (gera dist/)
RUN npm run build

# Etapa 2: Run (imagem final mais leve)
FROM node:20

WORKDIR /app

# Copiar package.json e tsconfig
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/tsconfig.json ./ 

# Instalar apenas produção + ts-node
RUN npm install --only=production
RUN npm install -D ts-node typescript @types/node

# Copiar código fonte completo
COPY . .

# Expor a porta da API
EXPOSE 3000

ENV DOCKER=true

# Rodar TS direto
CMD ["npx", "ts-node", "src/server.ts"]
# Etapa 1: Build
FROM node:20 AS builder
WORKDIR /app

# Copiar arquivos de dependências e instalar dev+prod
COPY package*.json tsconfig.json ./
RUN npm install

# Copiar código fonte e build
COPY . .
RUN npm run build   # gera dist/

# Etapa 2: Run
FROM node:20
WORKDIR /app

# Copiar apenas o dist e package.json (para dependências)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Instalar apenas dependências de produção
RUN npm install --only=production

# Expor porta
EXPOSE 3000

# Rodar JS compilado
CMD ["node", "dist/server.js"]

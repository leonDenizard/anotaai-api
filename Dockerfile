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

# Copiar apenas o necessário da etapa anterior
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

RUN npm install --only=production

# Expor a porta da API
EXPOSE 3000

# Comando para rodar
CMD ["node", "dist/server.js"]

FROM node:16-alpine
WORKDIR /server
COPY package*.json .
COPY prisma ./prisma/*
RUN npm ci
COPY . .
EXPOSE 5000
CMD npm run dev


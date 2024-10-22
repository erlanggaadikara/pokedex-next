FROM node:18.17-alpine

ENV PORT=8080

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
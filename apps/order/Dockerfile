FROM node:18.15.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i -g @nestjs/cli
RUN npm install

COPY . .

CMD [ "npm", "run", "start:order" ]
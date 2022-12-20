FROM node:18 as development

WORKDIR /camagru/frontend

COPY package*.json ./

RUN npm clean-install

COPY . .

RUN node app.js

EXPOSE 6300
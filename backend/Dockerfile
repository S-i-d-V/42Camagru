FROM node:18 as development

WORKDIR /camagru/backend

COPY package*.json ./

RUN npm clean-install

COPY . .

RUN node app.js &

EXPOSE 3000
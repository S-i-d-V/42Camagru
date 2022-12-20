FROM node:18 as development
WORKDIR /camagru/backend

COPY package*.json ./
RUN npm clean-install

COPY . .
EXPOSE 3000
FROM node:18 as development
WORKDIR /camagru/frontend

COPY package*.json ./
RUN npm clean-install

COPY . .
EXPOSE 6300
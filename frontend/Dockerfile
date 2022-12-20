FROM node:18 as development

WORKDIR /camagru/frontend

COPY package*.json ./

RUN npm clean-install

RUN mkdir pages/ scripts/ styles/

COPY pages/login-get.js pages/
COPY pages/register-get.js pages/
COPY pages/sendResetPass-get.js pages/

COPY styles/login.css styles/
COPY styles/register.css styles/
COPY styles/sendResetPass.css styles/
COPY styles/styles.css styles/

COPY scripts/login.js scripts/
COPY scripts/register.js scripts/
COPY scripts/sendResetPass.js scripts/

COPY . .

RUN node app.js &

EXPOSE 6300
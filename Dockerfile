FROM node:14.17.2
WORKDIR /home/app
COPY ./ ./
COPY package.json .
RUN npm install --production
EXPOSE 3333
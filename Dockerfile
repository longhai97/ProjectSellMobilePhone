FROM node:10

WORKDIR /Project
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 6060

CMD ["npm", "start"]

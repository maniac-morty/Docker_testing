    FROM node:latest

    COPY package.json /app/
    COPY server.js /app/
    COPY index.html /app/

    WORKDIR /app

    
    RUN npm install

    CMD ["node", "server.js"]


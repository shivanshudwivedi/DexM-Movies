FROM node

WORKDIR /app

COPY package.json .

RUN rm -rf node_modules/.vite/

RUN npm cache clean --force

RUN npm i

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
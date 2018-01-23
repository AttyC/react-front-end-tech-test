FROM node:8.3-alpine
EXPOSE 8080
RUN mkdir /fe_test
WORKDIR /fe_test
RUN cd /fe_test
COPY package.json .
COPY . .
RUN npm install
CMD ["npm", "run", "start"]
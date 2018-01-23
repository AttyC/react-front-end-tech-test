FROM node:8.3-alpine
EXPOSE 3000
RUN mkdir /fe_test
WORKDIR /fe_test
RUN cd /fe_test
COPY ./package.json /fe_test
COPY . /fe_test
RUN npm install
RUN npm start
RUN npm run serve
# Install Tini for alpine. Use Tini entrypoint to use PID1 correctly and for correct handling of SIGTERM
RUN apk add --no-cache tini
# Change security context to non-root user
USER node
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "./server/"]
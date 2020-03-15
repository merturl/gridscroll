FROM node:latest

COPY ./client ./client
WORKDIR /client
RUN yarn install

CMD ["yarn", "start"]
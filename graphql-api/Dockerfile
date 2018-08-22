FROM node:10.7-alpine
WORKDIR /app
COPY . /app
RUN npm install -g yarn
RUN yarn 
ENTRYPOINT [ "yarn","start" ]
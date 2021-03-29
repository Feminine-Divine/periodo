FROM node:latest
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN yarn install
COPY . /usr/src/app
CMD [ "yarn" , "dev" ]
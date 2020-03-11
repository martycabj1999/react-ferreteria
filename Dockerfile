# base image
FROM node:13.8.0

# set working directory
WORKDIR /front

# add `/front/node_modules/.bin` to $PATH
ENV PATH /front/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /front/package.json
COPY package-lock.json /front/package-lock.json

RUN npm ci
RUN apt install git -y

# start app
CMD ["npm", "start"]
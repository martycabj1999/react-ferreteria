# base image
FROM node:13.8.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci

RUN apt install git -y

# start app
CMD ["npm", "start"]
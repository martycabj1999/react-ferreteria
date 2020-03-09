FROM ubuntu

RUN apt-get -y update && sudo apt -y upgrade &&
    apt-get install curl &&
    curl -sL https://deb.nodesource.com/setup_13.x | bash - &&
    apt-get install -y nodejs

WORKDIR . /home/react-ferreteria

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
FROM node:18

WORKDIR /usr/src/app

COPY package*.json /usr/src/app 

RUN npm install
RUN npm install mysql
RUN npm install express -y --save

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget \
    && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]

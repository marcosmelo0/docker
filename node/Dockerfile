FROM node:15

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.7.0

RUN sed -i 's/stretch/buster/g' /etc/apt/sources.list

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/v0.7.0/dockerize-linux-amd64-v0.7.0.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

# CMD [ "node", "index.js" ]
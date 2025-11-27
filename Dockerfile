FROM node:16.19.0

COPY . /reja1
WORKDIR /reja1
CMD npm install && node server.js

# DOCKERFILE => DOCKER IMAGE => direct docker: CONTAINER
# DOCKERFILE => DOCKER IMAGE => docker-compose: CONTAINER
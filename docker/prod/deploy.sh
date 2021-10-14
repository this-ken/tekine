#!/bin/bash

docker-compose down
docker rmi tuimac/web
docker rmi tuimac/application
docker-compose up -d

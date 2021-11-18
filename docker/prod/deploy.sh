#/bin/bash

DOCKER_ID='tuimac'

function create_env(){
    docker-compose up -d
}

function delete_env(){
    docker-compose down
    docker rmi ${DOCKER_ID}/web
    docker rmi ${DOCKER_ID}/application
}

function renew_project(){
    cd ../..
    git pull
    cd docker/prod
}

function main(){
    renew_project
    delete_env
    create_env
}

main

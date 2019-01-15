#!/bin/sh
docker run --rm --interactive --tty --publish 8080:8080 --user "$(id -u):$(id -g)" --volume "$(pwd):/GARNET" --workdir /GARNET node:8-alpine sh -c 'yarn install && yarn build:no-watch && yarn dist && yarn serve'

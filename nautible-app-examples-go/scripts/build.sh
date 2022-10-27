#!/bin/bash

#aws|azure
CLOUD=$1

docker build --build-arg CLOUD=$CLOUD -t $IMAGE -f ./package/examples/Dockerfile.local .

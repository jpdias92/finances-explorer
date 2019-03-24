#!/bin/bash

docker-compose down

mv data/mysql/.gitkeep .
rm -rf data/mysql/
mkdir data/mysql
mv .gitkeep data/mysql

docker-compose up -d --build
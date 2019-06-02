#!/bin/bash

docker-compose down

mv database/data/mysql/.gitkeep .
rm -rf database/data/mysql/
mkdir database/data/mysql
mv .gitkeep database/data/mysql

docker-compose up -d --build
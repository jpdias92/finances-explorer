# Finances Explorer

## Pre-requisites

* Install [Docker Desktop](https://www.docker.com/products/docker-desktop) for your OS.

## Running

```
docker-compose up -d --build
```

* phpMyAdmin will be accessible on http://localhost:8080/
    * username: root
    * password: tiger

* API documentation will be available on http://0.0.0.0:8888/api/


## Components

### [Database](./database/README.md)

* MySQL 5.7
* phpMyAdmin

### [Server](./server/README.md)

* Python 3.7.2

### [App](./app/README.md)

* Angular
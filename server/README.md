# Finances Explorer Server

## Pre-requisites

* Python 3.7.2
* pip 19.1.1

## Installation

```
pip3 install virtualenv
python3 -m virtualenv venv
```

## Running

```
source venv/bin/activate
python app.py
```

## Building and running the docker image

1. Build the image with `docker build -t finances-explorer-api .`. This will yield the `finances-explorer-api:latest` image. 

2. Run it with `docker run -d -p 8888:8888 finances-explorer-api:latest`. The api will then be running on `http://0.0.0.0:8888/api`.
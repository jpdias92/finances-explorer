# Finances Explorer MySQL Database

The database chosen was MySQL due to its simplicity and ease of use. The database will run inside a docker container, with a volume mounted in data/mysql for data persistence.

## Init scripts

Sometimes we may want to pre-populate the mysql database with data. This can be done by running .sql scripts when the image is being built.

The last step in the Dockerfile is to copy the content of  `bin/mysql/sql-scripts` to `/docker-entrypoint-initdb.d/`. These scripts will then be run when the container starts.

Some important remarks about this functionality:
* To force a rebuild, run docker-compose with `docker-compose up -d --build`
* If there is already data present in the mounted volume for the database `data/mysql`, nothing will happen. This is good because this way we don't lose any data by accident. If we really want to force the database to be populated as in the first run, we must first delete all contents from `data/mysql`

### Troubleshooting

**Missing pre-populated data after a fresh build**

When this happens, usually it's due to an error in the sql scripts, in `bin/mysql/sql-scripts`. You can easily check the error by inspecting the logs, by running `docker logs <mysql_container_id>`. Search for log lines similar to:
```
/usr/local/bin/docker-entrypoint.sh: running /docker-entrypoint-initdb.d/1-create-db.sql
mysql: [Warning] Using a password on the command line interface can be insecure.
ERROR 1064 (42000) at line 1: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '-explorer' at line 1
```
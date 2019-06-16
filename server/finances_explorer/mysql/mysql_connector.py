import os

import mysql.connector


def get_mysql():
    new_mysql = mysql.connector.connect(
        host=os.getenv('MYSQL_HOST_NAME', 'localhost'),
        user=os.getenv('MYSQL_USER', 'root'),
        passwd=os.getenv('MYSQL_PASSWORD', 'tiger')
    )

    return new_mysql

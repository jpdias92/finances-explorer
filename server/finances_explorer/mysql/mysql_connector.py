import os

import mysql.connector

global _mysql
_mysql = None


def _open_mysql_connection():
    new_mysql = mysql.connector.connect(
        host=os.getenv('MYSQL_HOST_NAME', 'localhost'),
        user=os.getenv('MYSQL_USER', 'root'),
        passwd=os.getenv('MYSQL_PASSWORD', 'tiger')
    )

    return new_mysql


def get_mysql():
    global _mysql
    if _mysql is None:
        _mysql = _open_mysql_connection()

    return _mysql


def close_mysql():
    global _mysql
    if _mysql is None:
        _mysql.transport.close()
    _mysql = None

from setuptools import setup, find_packages

setup(
    name='Finances Explorer',
    version='1.0.0',
    description='The backend of Finances Explorer app, which connects to the MySQL database and exposes a REST API',
    author='João Dias',

    packages=find_packages(),

    install_requires=['flask', 'flask-restplus', 'werkzeug', 'flask_script', 'flask_cors', 'mysql-connector'],

)

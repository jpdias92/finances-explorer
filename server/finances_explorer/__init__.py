import logging.config

from flask import Flask
from flask_cors import CORS
from flask import Blueprint

from settings import profiles, logging_conf_path
from finances_explorer.controllers.movements import ns as ns_movements
from finances_explorer.controllers.categories import ns as ns_categories
from finances_explorer.controllers.members import ns as ns_members
from finances_explorer.restplus import api

logging.config.fileConfig(logging_conf_path)
log = logging.getLogger(__name__)


def create_app(config_name):
    """
    Application Factory function

    Creates a Flask application passing a configuration profile:
    e.g. 'development' | 'testing' | 'production'
    """

    app = Flask(__name__)
    CORS(app)

    app.config.from_object(profiles[config_name])

    blueprint = Blueprint('api', __name__, url_prefix='/api')
    api.init_app(blueprint)
    api.add_namespace(ns_movements)
    api.add_namespace(ns_categories)
    api.add_namespace(ns_members)
    app.register_blueprint(blueprint)

    profiles[config_name].init_app(app)

    return app



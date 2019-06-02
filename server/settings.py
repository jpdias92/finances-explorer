import os

# Filesystem setting
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

# Logging
logging_conf_path = os.path.normpath(os.path.join(os.path.dirname(__file__), 'logging.conf'))


class Config:
    # Flask settings
    FINANCES_EXPLORER_HOST_NAME = os.getenv('FINANCES_EXPLORER_HOST_NAME', '0.0.0.0')
    FINANCES_EXPLORER_PORT = os.getenv('FINANCES_EXPLORER_PORT', '8888')

    SERVER_NAME = FINANCES_EXPLORER_HOST_NAME + ':' + FINANCES_EXPLORER_PORT
    DEBUG = False  # Do not use debug mode in production

    # Flask-Restplus settings
    SWAGGER_UI_DOC_EXPANSION = 'list'
    RESTPLUS_VALIDATE = True
    RESTPLUS_MASK_SWAGGER = False
    ERROR_404_HELP = False

    @staticmethod
    def init_app(app):

        @app.before_first_request
        def setup():
            pass

        @app.teardown_appcontext
        def shutdown_session(exception=None):
            pass


class DevelopmentConfig(Config):
    pass


class TestingConfig(Config):
    pass


class ProductionConfig(Config):
    pass


profiles = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
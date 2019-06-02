import os
import logging

from finances_explorer import create_app


log = logging.getLogger(__name__)

app = create_app(os.getenv('FLASK_CONFIG') or 'default')


if __name__ == '__main__':
    log.info('>>>>> Starting development server at http://{}/api/ <<<<<'.format(app.config['SERVER_NAME']))
    app.run(host='0.0.0.0', port=8888)

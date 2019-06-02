import logging

from flask_restplus import Resource, fields


from finances_explorer.restplus import api
from finances_explorer.dao.movement_dao_mysql import MovementDaoMysql
from finances_explorer.models.movement import Movement
from finances_explorer.utils.decorators import inject_dao

log = logging.getLogger(__name__)

ns = api.namespace('finances_explorer/movements', description='Operations related to Movements')


@ns.route('/')
class MovementCollection(Resource):

    @api.doc(id='list', description='Lists all movements')
    @api.response(200, 'Successfully retrieved movements list.')
    @api.marshal_list_with(Movement.get_movement_response_model, description="list of tag's inside tags object")
    @inject_dao
    def get(self, movement_dao_mysql: MovementDaoMysql):
        """Returns a JSON listing all movements"""
        return movement_dao_mysql.get_all()

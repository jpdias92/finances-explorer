import logging

from flask import request
from flask_restplus import Resource

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
    @api.marshal_list_with(Movement.get_movement_response_model)
    @inject_dao
    def get(self, movement_dao_mysql: MovementDaoMysql):
        """Returns a JSON listing all movements"""
        return movement_dao_mysql.get_all()

    @api.doc(id='create', description='Create a new movement')
    @api.response(201, 'Movement successfully created.')
    @api.expect(Movement.post_movement_request_model)
    @inject_dao
    def post(self, movement_dao_mysql: MovementDaoMysql):
        """Creates a new movement."""
        movement = Movement(
            category_id=request.json.get('category_id'),
            amount=request.json.get('amount'),
            movement_date=request.json.get('movement_date'),
            description=request.json.get('description'),
            comment=request.json.get('comment'),
        )
        movement_dao_mysql.insert(movement)
        return None, 201


@ns.route('/<int:movement_id>')
@api.response(404, 'Movement not found.')
class FundItem(Resource):
    @api.response(204, 'Movement successfully deleted.')
    @api.response(403, 'Movement cannot be deleted')
    @inject_dao
    def delete(self, movement_id, movement_dao_mysql: MovementDaoMysql):
        """Deletes movement."""
        movement_dao_mysql.delete(movement_id)

        return None, 204

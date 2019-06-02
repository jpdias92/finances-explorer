import logging

from flask_restplus import Resource
from flask import make_response, jsonify

from finances_explorer.restplus import api

log = logging.getLogger(__name__)

ns = api.namespace('finances_explorer/movements', description='Operations related to Movements')


@ns.route('/')
class MovementCollection(Resource):

    @api.doc(id='list', description='Lists all movements')
    @api.response(200, 'Successfully retrieved movements list.')
    def get(self):
        """Returns a JSON listing all movements"""
        result = {
            "id": "0",
        }
        return make_response(jsonify(result), 200)

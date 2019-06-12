import logging

from flask import request
from flask_restplus import Resource

from finances_explorer.restplus import api
from finances_explorer.dao.category_dao_mysql import CategoryDaoMysql
from finances_explorer.models.category import Category
from finances_explorer.utils.decorators import inject_dao

log = logging.getLogger(__name__)

ns = api.namespace('finances_explorer/categories', description='Operations related to Movement Categories')


@ns.route('/')
class CategoryCollection(Resource):

    @api.doc(id='list', description='Lists all categories')
    @api.response(200, 'Successfully retrieved categories list.')
    @api.marshal_list_with(Category.get_category_response_model)
    @inject_dao
    def get(self, category_dao_mysql: CategoryDaoMysql):
        """Returns a JSON listing all categories"""
        return category_dao_mysql.get_all()

    @api.doc(id='create', description='Create a new category')
    @api.response(201, 'Category successfully created.')
    @api.expect(Category.post_category_request_model)
    @inject_dao
    def post(self, category_dao_mysql: CategoryDaoMysql):
        """Creates a new category."""
        category = Category(name=request.json.get('name'))
        category_dao_mysql.insert(category)
        return None, 201


@ns.route('/<int:category_id>')
@api.response(404, 'Category not found.')
class CategoryItem(Resource):
    @api.response(204, 'Category successfully deleted.')
    @api.response(403, 'Category cannot be deleted')
    @inject_dao
    def delete(self, category_id, category_dao_mysql: CategoryDaoMysql):
        """Deletes category."""
        if category_dao_mysql.is_used(category_id):
            return "Category being used in Movements, cannot be deleted", 403

        category_dao_mysql.delete(category_id)
        return None, 204

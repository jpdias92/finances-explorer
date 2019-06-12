import json

from flask_restplus import fields

from finances_explorer.restplus import api


class Category:
    get_category_response_model = api.model('Category', {
        'category_id': fields.Integer(description="The ID of the category"),
        'name': fields.String(description="Name of the category"),
    })

    post_category_request_model = api.model('Create new Category', {
        'name': fields.String(description="The name of the new category")
    })

    def __init__(self, category_id="", name=""):
        self.category_id = category_id
        self.name = name

    def __str__(self):
        attrs = vars(self)
        return ', '.join("%s: %s" % item for item in attrs.items())

    def to_json_string(self):
        return json.dumps(self.__dict__)

    def to_json(self):
        return json.loads(self.to_json_string())

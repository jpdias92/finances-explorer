import json

from flask_restplus import fields

from finances_explorer.restplus import api


class Movement:
    get_movement_response_model = api.model('Movement', {
        'movement_id': fields.Integer(example="1", description="The ID of the movement in the database"),
        'category_id': fields.Integer(description="The ID of the movement's category"),
        'amount': fields.Float(example=10.55, description="The movement's amount"),
        'movement_date': fields.String(example="2019-01-01", description="Date of the movement"),
        'description': fields.String(description="The movement's description"),
        'comment': fields.String(description="An optional comment about the movement")
    })

    post_movement_request_model = api.model('Create new Movement', {
        'category_id': fields.Integer(required=True, description="The ID of the movement's category"),
        'amount': fields.Float(required=True, example=10.55, description="The movement's amount"),
        'movement_date': fields.String(required=True, example="2019-01-01", description="Date of the movement"),
        'description': fields.String(required=True, description="The movement's description"),
        'comment': fields.String(description="An optional comment about the movement")
    })

    def __init__(self, movement_id="", category_id="", amount="", movement_date="", description="", comment=""):
        self.movement_id = movement_id
        self.category_id = category_id
        self.amount = amount
        self.movement_date = movement_date
        self.description = description
        self.comment = comment

    def __str__(self):
        attrs = vars(self)
        return ', '.join("%s: %s" % item for item in attrs.items())

    @classmethod
    def from_dict(cls, data):
        movement = Movement(**data)
        return movement

    def to_json_string(self):
        return json.dumps(self.__dict__)

    def to_json(self):
        return json.loads(self.to_json_string())

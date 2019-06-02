import json

from flask_restplus import fields

from finances_explorer.restplus import api


class Movement:
    get_movement_response_model = api.model('Movement', {
        'movement_id': fields.Integer(example="1", description="The ID of the movement in the database"),
        'category': fields.String(description="The category of the movement"),
        'amount': fields.Float(example="10.55", description="The movement's amount"),
        'movement_date': fields.String(example="01-01-2019", description="Date of the movement"),
        'description': fields.String(description="The movement's description"),
        'comment': fields.String(description="An optional comment about the movement"),
    })

    def __init__(self, movement_id, category, amount, movement_date, description, comment=""):
        self.movement_id = movement_id
        self.category = category
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

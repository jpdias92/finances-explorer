import json

from flask_restplus import fields

from finances_explorer.restplus import api


class Member:
    get_member_response_model = api.model('Member', {
        'member_id': fields.Integer(example=1, description="The ID of the member in the database"),
        'title': fields.String(example="Mr.", description="Personal Title"),
        'name': fields.String(description="The member's full name"),
        'gender': fields.Integer(example=0, description="0-Masculino, 1-Feminino"),
        'nationality': fields.String(description="The member's nationality"),
        'birth_date': fields.Date(example="2019-01-01", description="Birth Date"),
        'death_date': fields.Date(example="2019-01-01", description="The death date of the member"),
        'street_name': fields.String(description="Member's address field: street"),
        'door_number': fields.String(description="Member's address field: door number"),
        'flat': fields.String(description="Member's address field: flat number"),
        'postal-code': fields.String(description="Member's address field: postal code"),
        'city': fields.String(description="Member's address field: city"),
        'contact1': fields.String(description="Member's main contact"),
        'contact2': fields.String(description="Member's secondary contact"),
        'email': fields.String(),
        'baptism_date': fields.Date(example="2019-01-01", description="The date of the member's baptism"),
        'communion_date': fields.Date(example="2019-01-01", description="The date of the member's communion"),
        'confirmation_date': fields.Date(example="2019-01-01", description="The date of the member's confirmation"),
        'marital_status': fields.String(),
        'partner_id': fields.Integer(example=1, description="The ID of the member's partner, when also a member"),
        'occupation': fields.String(description="The member's profession"),
        'professional_qualifications': fields.String(description="The highest academic degree level achieved"),
        'father_id': fields.Integer(example=2, description="The ID of the member's father, when also a member"),
        'mother_id': fields.Integer(example=3, description="The ID of the member's mother, when also a member")
    })

    post_member_request_model = api.model('Create new Member', {
        'title': fields.String(example="Mr.", description="Personal Title"),
        'name': fields.String(required=True, description="The member's full name"),
        'gender': fields.Integer(required=True, example=0, description="0-Masculino, 1-Feminino"),
        'nationality': fields.String(description="The member's nationality"),
        'birth_date': fields.Date(required=True, example="2019-01-01", description="Birth Date"),
        'death_date': fields.Date(example="2019-01-01", description="The death date of the member"),
        'street_name': fields.String(description="Member's address field: street"),
        'door_number': fields.String(description="Member's address field: door number"),
        'flat': fields.String(description="Member's address field: flat number"),
        'postal_code': fields.String(description="Member's address field: postal code"),
        'city': fields.String(description="Member's address field: city"),
        'contact1': fields.String(description="Member's main contact"),
        'contact2': fields.String(description="Member's secondary contact"),
        'email': fields.String(),
        'baptism_date': fields.Date(example="2019-01-01", description="The date of the member's baptism"),
        'communion_date': fields.Date(example="2019-01-01", description="The date of the member's communion"),
        'confirmation_date': fields.Date(example="2019-01-01", description="The date of the member's confirmation"),
        'marital_status': fields.String(),
        'partner_id': fields.Integer(example=1, description="The ID of the member's partner, when also a member"),
        'occupation': fields.String(description="The member's profession"),
        'professional_qualifications': fields.String(description="The highest academic degree level achieved"),
        'father_id': fields.Integer(example=2, description="The ID of the member's father, when also a member"),
        'mother_id': fields.Integer(example=3, description="The ID of the member's mother, when also a member")
    })

    def __init__(self, member_id="", title="", name="", gender="", nationality="", birth_date="",
                 death_date="", street_name="", door_number="", flat="", postal_code="", city="",
                 contact1="", contact2="", email="", baptism_date="", communion_date="", confirmation_date="",
                 marital_status="", partner_id="", occupation="", professional_qualifications="", father_id="",
                 mother_id=""):
        self.member_id = member_id
        self.title = title
        self.name = name
        self.gender = gender
        self.nationality = nationality
        self.birth_date = birth_date
        self.death_date = death_date
        self.street_name = street_name
        self.door_number = door_number
        self.flat = flat
        self.postal_code = postal_code
        self.city = city
        self.contact1 = contact1
        self.contact2 = contact2
        self.email = email
        self.baptism_date = baptism_date
        self.communion_date = communion_date
        self.confirmation_date = confirmation_date
        self.marital_status = marital_status
        self.partner_id = partner_id
        self.occupation = occupation
        self.professional_qualifications = professional_qualifications
        self.father_id = father_id
        self.mother_id = mother_id

    def __str__(self):
        attrs = vars(self)
        return ', '.join("%s: %s" % item for item in attrs.items())

    def to_json_string(self):
        return json.dumps(self.__dict__)

    def to_json(self):
        return json.loads(self.to_json_string())

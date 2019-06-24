import logging

from flask import request
from flask_restplus import Resource

from finances_explorer.restplus import api
from finances_explorer.dao.member_dao_mysql import MemberDaoMysql
from finances_explorer.models.member import Member
from finances_explorer.utils.decorators import inject_dao

log = logging.getLogger(__name__)

ns = api.namespace('finances_explorer/members', description='Operations related to Members')


@ns.route('/')
class MemberCollection(Resource):

    @api.doc(id='list', description='Lists all members')
    @api.response(200, 'Successfully retrieved members list.')
    @api.marshal_list_with(Member.get_member_response_model)
    @inject_dao
    def get(self, member_dao_mysql: MemberDaoMysql):
        """Returns a JSON listing all members"""
        return member_dao_mysql.get_all()

    @api.doc(id='create', description='Create a new member')
    @api.response(201, 'Member successfully created.')
    @api.expect(Member.post_member_request_model)
    @inject_dao
    def post(self, member_dao_mysql: MemberDaoMysql):
        """Creates a new member."""
        member = Member(
            title=request.json.get('title'),
            name=request.json.get('name'),
            gender=request.json.get('gender'),
            nationality=request.json.get('nationality'),
            birth_date=request.json.get('birth_date'),
            death_date=request.json.get('death_date'),
            street_name=request.json.get('street_name'),
            door_number=request.json.get('door_number'),
            flat=request.json.get('flat'),
            postal_code=request.json.get('postal_code'),
            city=request.json.get('city'),
            contact1=request.json.get('contact1'),
            contact2=request.json.get('contact2'),
            email=request.json.get('email'),
            baptism_date=request.json.get('baptism_date'),
            communion_date=request.json.get('communion_date'),
            confirmation_date=request.json.get('confirmation_date'),
            marital_status=request.json.get('marital_status'),
            partner_id=request.json.get('partner_id'),
            occupation=request.json.get('occupation'),
            professional_qualifications=request.json.get('professional_qualifications'),
            father_id=request.json.get('father_id'),
            mother_id=request.json.get('mother_id'),
        )
        member_dao_mysql.insert(member)
        return None, 201


@ns.route('/<int:member_id>')
@api.response(404, 'Member not found.')
class MemberItem(Resource):

    @api.response(200, 'Member successfully edited.')
    @api.expect(Member.post_member_request_model)
    @inject_dao
    def put(self, member_id, member_dao_mysql: MemberDaoMysql):
        """Edits a member."""
        member = Member(
            title=request.json.get('title'),
            name=request.json.get('name'),
            gender=request.json.get('gender'),
            nationality=request.json.get('nationality'),
            birth_date=request.json.get('birth_date'),
            death_date=request.json.get('death_date'),
            street_name=request.json.get('street_name'),
            door_number=request.json.get('door_number'),
            flat=request.json.get('flat'),
            postal_code=request.json.get('postal_code'),
            city=request.json.get('city'),
            contact1=request.json.get('contact1'),
            contact2=request.json.get('contact2'),
            email=request.json.get('email'),
            baptism_date=request.json.get('baptism_date'),
            communion_date=request.json.get('communion_date'),
            confirmation_date=request.json.get('confirmation_date'),
            marital_status=request.json.get('marital_status'),
            partner_id=request.json.get('partner_id'),
            occupation=request.json.get('occupation'),
            professional_qualifications=request.json.get('professional_qualifications'),
            father_id=request.json.get('father_id'),
            mother_id=request.json.get('mother_id'),
        )

        member_dao_mysql.put(member_id, member)

        return None, 200

    @api.response(204, 'Member successfully deleted.')
    @api.response(403, 'Member cannot be deleted')
    @inject_dao
    def delete(self, member_id, membert_dao_mysql: MemberDaoMysql):
        """Deletes a member."""
        membert_dao_mysql.delete(member_id)

        return None, 204

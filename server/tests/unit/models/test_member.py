import unittest

from finances_explorer.models.member import Member


class MemberTest(unittest.TestCase):

    def test_movement_to_json(self):
        new_member = Member(1, 'Miss', 'Adelaide Pereira', 1, 'Portuguesa', '1928-05-06', '', 'R. Correia', '166',
                            '1 Dt', '4430-999', 'Vila Nova de Gaia', '22 3860549', '919246535', '', '', '',
                            '1943-01-15', 'Solteiro', '', 'Funcionaria Publica Reformada', '9 ano', '', '')
        self.assertEqual('{"member_id": 1, "title": "Miss", "name": "Adelaide Pereira", "gender": 1, '
                         '"nationality": "Portuguesa", "birth_date": "1928-05-06", "death_date": "", '
                         '"street_name": "R. Correia", "door_number": "166", "flat": "1 Dt", '
                         '"postal_code": "4430-999", "city": "Vila Nova de Gaia", "contact1": "22 3860549", '
                         '"contact2": "919246535", "email": "", "baptism_date": "", "communion_date": "", '
                         '"confirmation_date": "1943-01-15", "marital_status": "Solteiro", "partner_id": "", '
                         '"occupation": "Funcionaria Publica Reformada", '
                         '"professional_qualifications": "9 ano", "father_id": "", "mother_id": ""}',
                         new_member.to_json_string())

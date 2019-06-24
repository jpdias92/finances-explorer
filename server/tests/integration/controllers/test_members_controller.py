from unittest import TestCase

from finances_explorer import create_app
from finances_explorer.mysql.mysql_connector import get_mysql
from finances_explorer.dao.member_dao_mysql import MemberDaoMysql


class TestMemberController(TestCase):

    def setUp(self):
        self.app = create_app('testing')
        self.app_context = self.app.test_request_context()
        self.app_context.push()
        self.client = self.app.test_client()

    def tearDown(self):
        self.app_context.pop()
        self.mysql.close()

    @classmethod
    def setUpClass(cls):
        cls.mysql = get_mysql()
        cls.dao = MemberDaoMysql(cls.mysql)

    @classmethod
    def tearDownClass(cls):
        cls.mysql.close()

    def test_get_members(self):
        """
        GET /members
        """
        response = self.client.get('api/finances_explorer/members/')
        self.assertEqual(200, response.status_code)

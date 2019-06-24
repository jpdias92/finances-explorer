from unittest import TestCase

from finances_explorer.mysql.mysql_connector import get_mysql
from finances_explorer.dao.member_dao_mysql import MemberDaoMysql


class TestMemberDaoEs(TestCase):
    @classmethod
    def setUpClass(cls):
        cls.mysql = get_mysql()
        cls.dao = MemberDaoMysql(cls.mysql)

    @classmethod
    def tearDownClass(cls):
        cls.mysql.close()

    def test_get_all(self):
        self.assertEqual(len(self.dao.get_all()), 16)

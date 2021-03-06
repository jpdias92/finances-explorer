from unittest import TestCase

from finances_explorer.mysql.mysql_connector import get_mysql
from finances_explorer.dao.movement_dao_mysql import MovementDaoMysql


class TestMovementDaoEs(TestCase):
    @classmethod
    def setUpClass(cls):
        cls.mysql = get_mysql()
        cls.dao = MovementDaoMysql(cls.mysql)

    @classmethod
    def tearDownClass(cls):
        cls.mysql.close()

    def test_get_all(self):
        self.assertEqual(len(self.dao.get_all()), 4)

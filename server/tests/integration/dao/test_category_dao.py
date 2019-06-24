from unittest import TestCase

from finances_explorer.mysql.mysql_connector import get_mysql
from finances_explorer.dao.category_dao_mysql import CategoryDaoMysql


class TestCategoryDaoEs(TestCase):
    @classmethod
    def setUpClass(cls):
        cls.mysql = get_mysql()
        cls.dao = CategoryDaoMysql(cls.mysql)

    @classmethod
    def tearDownClass(cls):
        cls.mysql.close()

    def test_get_all(self):
        self.assertEqual(len(self.dao.get_all()), 2)

    def test_is_used(self):
        self.assertEqual(self.dao.is_used(1), True)
        self.assertEqual(self.dao.is_used(-1), False)

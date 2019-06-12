import unittest

from finances_explorer.models.category import Category


class MovementTest(unittest.TestCase):

    def test_movement_to_json(self):
        new_category = Category(1, "Expense")
        self.assertEqual(new_category.to_json_string(), '{"category_id": 1, "name": "Expense"}')

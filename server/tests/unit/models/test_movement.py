import unittest
import json

from finances_explorer.models.movement import Movement


class MovementTest(unittest.TestCase):

    def test_movement_to_json(self):
        new_movement = Movement(1, 1, 10.00, "2019-01-01", "Test Movement", "")
        self.assertEqual(new_movement.to_json_string(),
                         '{"movement_id": 1, "category": 1, "amount": 10.0, "movement_date": "2019-01-01", '
                         '"description": "Test Movement", "comment": ""}')

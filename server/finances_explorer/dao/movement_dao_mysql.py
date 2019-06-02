from typing import List

from mysql.connector import MySQLConnection

from finances_explorer.models.movement import Movement


class MovementDaoMysql:
    """Data Access Object for interaction of Movement objects with MySQL"""

    def __init__(self, mysql: MySQLConnection):
        self.mysql = mysql

    def get_all(self) -> List[Movement]:
        cursor = self.mysql.cursor()
        cursor.execute("SELECT id, movement_category_id, amount, movement_date, "
                       "description, comment FROM finances_explorer.movements;")
        results = cursor.fetchall()

        movements = []
        for result in results:
            movement = Movement(movement_id=result[0], category=result[1], amount=float(result[2]),
                                movement_date=str(result[3]), description=result[4], comment=result[5])
            movements.append(movement)

        return movements







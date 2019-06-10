from typing import List

from mysql.connector import MySQLConnection

from finances_explorer.models.movement import Movement


class MovementDaoMysql:
    """Data Access Object for interaction of Movement objects with MySQL"""

    def __init__(self, mysql: MySQLConnection):
        self.mysql = mysql

    def insert(self, mov: Movement):
        cursor = self.mysql.cursor()
        sql_insert_query = f"""
            INSERT INTO finances_explorer.movements 
            (movement_category_id, amount, movement_date, description, comment) 
            VALUES ({mov.category_id}, {mov.amount}, '{mov.movement_date}', 
            '{mov.description}', '{mov.comment}')
        """
        result = cursor.execute(sql_insert_query)
        self.mysql.commit()
        print(result)

    def get_all(self) -> List[Movement]:
        cursor = self.mysql.cursor()
        cursor.execute("SELECT id, movement_category_id, amount, movement_date, description, comment "
                       "FROM finances_explorer.movements ")
        results = cursor.fetchall()

        movements = []
        for result in results:
            movement = Movement(movement_id=result[0], category_id=result[1], amount=float(result[2]),
                                movement_date=str(result[3]), description=result[4], comment=result[5])
            movements.append(movement)

        return movements

    def delete(self, movement_id):
        cursor = self.mysql.cursor()
        sql_insert_query = f"DELETE FROM finances_explorer.movements WHERE id = {movement_id};"
        result = cursor.execute(sql_insert_query)
        self.mysql.commit()
        print(result)






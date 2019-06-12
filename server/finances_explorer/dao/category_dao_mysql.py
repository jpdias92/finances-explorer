from typing import List

from mysql.connector import MySQLConnection

from finances_explorer.models.category import Category


class CategoryDaoMysql:
    """Data Access Object for interaction of Category objects with MySQL"""

    def __init__(self, mysql: MySQLConnection):
        self.mysql = mysql

    def insert(self, cat: Category):
        cursor = self.mysql.cursor()
        sql_insert_query = f"""
            INSERT INTO finances_explorer.movement_categories 
            (name) 
            VALUES ('{cat.name}')
        """
        result = cursor.execute(sql_insert_query)
        self.mysql.commit()
        print(result)

    def get_all(self) -> List[Category]:
        cursor = self.mysql.cursor()
        cursor.execute("SELECT id, cat.name FROM finances_explorer.movement_categories AS cat ")
        results = cursor.fetchall()

        categories = []
        for result in results:
            category = Category(category_id=result[0], name=result[1])
            categories.append(category)

        return categories

    def is_used(self, category_id):
        cursor = self.mysql.cursor()
        check_query = f"SELECT COUNT(*) AS count_usages " \
                      f"FROM finances_explorer.movements " \
                      f"WHERE movement_category_id = {category_id}"
        cursor.execute(check_query)
        result = cursor.fetchone()
        return result[0] > 0

    def delete(self, category_id):
        cursor = self.mysql.cursor()
        sql_insert_query = f"DELETE FROM finances_explorer.movement_categories WHERE id = {category_id};"
        result = cursor.execute(sql_insert_query)
        self.mysql.commit()
        print(result)

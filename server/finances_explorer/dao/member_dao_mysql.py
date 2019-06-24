from typing import List

from mysql.connector import MySQLConnection

from finances_explorer.models.member import Member


class MemberDaoMysql:
    """Data Access Object for interaction of Member objects with MySQL"""

    def __init__(self, mysql: MySQLConnection):
        self.mysql = mysql

    def insert(self, m: Member):
        cursor = self.mysql.cursor(prepared=True)
        sql_insert_query = """
          INSERT INTO finances_explorer.members
            (title, name, gender, nationality, birth_date, death_date, street_name, door_number, flat, 
            postal_code, city, contact1, contact2, email, baptism_date, communion_date, confirmation_date, 
            marital_status, partner_id, occupation, professional_qualifications, father_id, mother_id) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s)
        """
        insert_tuple = (m.title, m.name, m.gender, m.nationality, m.birth_date, m.death_date, m.street_name,
                        m.door_number, m.flat, m.postal_code, m.city, m.contact1, m.contact2, m.email,
                        m.baptism_date, m.communion_date, m.confirmation_date, m.marital_status, m.partner_id,
                        m.occupation, m.professional_qualifications, m.father_id, m.mother_id)

        result = cursor.execute(sql_insert_query, insert_tuple)
        self.mysql.commit()
        print(result)

    def get_all(self) -> List[Member]:
        cursor = self.mysql.cursor()
        cursor.execute("SELECT id, title, name, gender, nationality, birth_date, death_date, street_name, door_number,"
                       "flat, postal_code, city, contact1, contact2, email, baptism_date, communion_date,"
                       "confirmation_date, marital_status, partner_id, occupation, professional_qualifications,"
                       "father_id, mother_id "
                       "FROM finances_explorer.members")
        results = cursor.fetchall()

        members = []
        for result in results:
            member = Member(member_id=result[0], title=result[1], name=result[2], gender=str(result[3]),
                            nationality=result[4], birth_date=result[5], death_date=result[6],
                            street_name=result[7], door_number=result[8], flat=result[9], postal_code=result[10],
                            city=result[11], contact1=result[12], contact2=result[13], email=result[14],
                            baptism_date=result[15], communion_date=result[16], confirmation_date=result[17],
                            marital_status=result[18], partner_id=result[19], occupation=result[20],
                            professional_qualifications=result[21], father_id=result[22], mother_id=result[23])
            members.append(member)

        return members

    def delete(self, member_id):
        cursor = self.mysql.cursor()
        sql_insert_query = f"DELETE FROM finances_explorer.members WHERE id = {member_id};"
        result = cursor.execute(sql_insert_query)
        self.mysql.commit()
        print(result)

    def put(self, member_id, m: Member):
        cursor = self.mysql.cursor(prepared=True)

        sql_update_query = """
            UPDATE finances_explorer.members
            SET title = %s, name = %s, gender = %s, nationality = %s, birth_date = %s, death_date = %s, 
            street_name = %s, door_number = %s, flat = %s, postal_code = %s, city = %s, contact1 = %s, 
            contact2 = %s, email = %s, baptism_date = %s, communion_date = %s, confirmation_date = %s, 
            marital_status = %s, partner_id = %s, occupation = %s, professional_qualifications = %s, 
            father_id = %s, mother_id = %s
            WHERE id = %s;
        """

        update_tuple = (m.title, m.name, m.gender, m.nationality, m.birth_date, m.death_date, m.street_name,
                        m.door_number, m.flat, m.postal_code, m.city, m.contact1, m.contact2, m.email,
                        m.baptism_date, m.communion_date, m.confirmation_date, m.marital_status, m.partner_id,
                        m.occupation, m.professional_qualifications, m.father_id, m.mother_id, member_id)

        result = cursor.execute(sql_update_query, update_tuple)
        self.mysql.commit()
        print(result)





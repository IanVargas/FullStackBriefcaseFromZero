import psycopg2


class PgManager:
    def __init__(self,db_name,db_host,db_username,db_password,db_port=5432):
        self.db_name = db_name
        self.db_host = db_host
        self.db_username = db_username
        self.db_password = db_password
        self.db_port = db_port
        try:
            self.connection = self.set_connection_to_database(db_name,db_host,db_username,db_password,db_port)
            if self.connection:
                self.cursor = self.connection.cursor()
                print("database connection established correctly")
        except Exception as error:
            print("database not connecte",error)
    def set_connection_to_database(self,db_name,db_host,db_username,db_password,db_port=5432):
        try:
            connection = psycopg2.connect(
                dbname=db_name,
                user=db_username,
                password=db_password,
                host=db_host,
                port=db_port,
            )
            return connection
        except Exception as error:
            print("Not able to connect due to",error)
    def create_query(self,query,data):
        print(data)
        if data != "":
            self.cursor.execute(query,data)
            self.connection.commit()
            result = self.cursor.fetchall()
            return result
        else:
            self.cursor.execute(query)
            self.connection.commit()
            result = self.cursor.fetchall()
            return result
            


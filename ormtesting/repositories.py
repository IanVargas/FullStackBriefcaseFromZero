
from sqlalchemy import insert,update,delete
from tablescreation import user_table


class UserRepositorie:

    def __init__(self,engine):
        self.engine = engine

    def create_user(self,user_info):
        with self.engine.connect() as conn:
            insert_user = conn.execute(insert(user_table),user_info,)
            conn.commit()

    def update_table(self,user_to_update,update_info):
        update_query = (
            update(user_table)
            .where(user_table.c.name==user_to_update)
            .values(name=update_info)
        )
        with self.engine.connect() as conn:
            conn.execute(update_query)
            conn.commit()
    
    def delete_user(self,user_to_delete):
        delete_query = (
            delete(user_table).where(user_table.c.name==user_to_delete)
        )
        with self.engine.connect() as conn:
            conn.execute(delete_query)
            conn.commit()
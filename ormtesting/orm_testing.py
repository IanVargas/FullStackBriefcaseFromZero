from sqlalchemy import create_engine
from repositories import UserRepositorie

db_url = 'postgresql://postgres:SaSha310631@localhost:5432/ormtesting'
engine = create_engine(db_url,echo=True)
repo = UserRepositorie(engine)
#user = [{"name" : "ian"},{"name" : "toto"}]
#repo.create_user(user)

#repo.update_table("ian", "juan")

repo.delete_user("juan")
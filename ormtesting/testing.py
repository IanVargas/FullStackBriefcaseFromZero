from tablescreation import createTable
from sqlalchemy import MetaData, Table,Column, Integer,String,create_engine,ForeignKey
from sqlalchemy.engine import reflection


db_url = 'postgresql://postgres:SaSha310631@localhost:5432/ormtesting'
engine = create_engine(db_url,echo=True)
metadata_obj = MetaData()
user_table = Table(
    "users",
    metadata_obj,
    Column("id",Integer,autoincrement=True,primary_key=True),
    Column("name",String),
)
cars_table = Table(
    "cars",
    metadata_obj,
    Column("id",Integer,autoincrement=True,primary_key=True),
    Column("model",String(30)),
    Column("user_id",ForeignKey("users.id"),nullable=False)
)
directions_table = Table(
    "directions",
    metadata_obj,
    Column("id", Integer, autoincrement=True,primary_key=True),
    Column("address", String(30)),
    Column("user_id",ForeignKey("users.id"))
)
metadata_obj.create_all(engine,checkfirst=True)


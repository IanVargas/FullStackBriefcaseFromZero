from flask import Flask
from views import UserView

app = Flask(__name__)
user_view_func = UserView.as_view('users_api')
app.add_url_rule('/users/<int:user_id>',methods=['GET','DELETE'],view_func=user_view_func)
app.add_url_rule('/users',methods=['POST','PUT'],view_func=user_view_func)





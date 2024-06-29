from bdmanagement import PgManager 
from repositories import UserRepository
from models import User
from flask import Flask,jsonify,request
from flask.views import MethodView
import json

connect_to_database = PgManager("poohtazoTesting","localhost","postgres","SaSha310631")

class UserView(MethodView):
    repo = UserRepository(connect_to_database)
    def get(self,user_id):
        get_user = self.repo.get_user(user_id)
        return jsonify(get_user), 200
    def delete(self,user_id):
        delete_user = self.repo.delete_user(user_id)
        return jsonify(delete_user), 200
    def post(self):
        userinfo = request.json
        print(userinfo)
        for user in userinfo: 
            new_user = User(
                user["username"],
                user["email"],
                user["password"],
                user["dateofbirth"],
                user["accountamount"])
            self.repo.create_new_user(new_user)
        return jsonify(userinfo)
        #new_user = User()
    def put(self):
        userinfo = request.json[0]
        for key in userinfo.keys:
         print(key)

class UserRepository:
    def __init__(self,pg_manager) -> None:
        self.pg_manager = pg_manager
    
    def create_new_user(self,user):
        try:
            query_to_create_user = ("INSERT INTO Lyfter_car_rental.Users(username,email,password,dateOfBirth,acountamount) VALUES(%s, %s, %s, %s, %s)")
            self.pg_manager.create_query(query_to_create_user,(user.username,user.email,user.password,user.date_of_birth,user.account_amount))
            print("user created")
        except Exception as error:
            print("Not able to create user",error)

    def update_user(self,updates,user):
        try:
            query = "UPDATE Lyfter_car_rental.Users set {} where username = {}".format(updates,user.username)
            self.pg_manager.create_query(query,"")
        except Exception as error:
            print(error)
    
    def delete_user(self,user):
        print(user)
        try:
            if type(user) is int:
                query = "Delete From Lyfter_car_rental.users where id='{}'".format(user)
                self.pg_manager.create_query(query,"")
                print(user.username,"deleted successfully")
            else:
                query = "Delete From Lyfter_car_rental.users where username='{}'".format(user.username)
                self.pg_manager.create_query(query,"")
                print(user.username,"deleted successfully")
        except Exception as error:
            print("not able to remove user due to error",error)
    def get_user(self,id):
        try:
            query = "Select * From Lyfter_car_rental.Users where id={}".format(id)
            response = self.pg_manager.create_query(query,"")
            return response
        except Exception as error:
            (error)
    


class CarRepository:
    def __init__(self,pg_manager) -> None:
        self.pg_manager = pg_manager
    
    def create_new_car(self,car):
        try:
            query_to_create_car = ("INSERT INTO Lyfter_car_rental.Cars(brand,model,modelyear,carstate) VALUES(%s, %s, %s, %s)")
            self.pg_manager.create_query(query_to_create_car,(car.brand,car.model,car.modelyear,car.carstate))
            print("car created")
        except Exception as error:
            print("Not able to create car",error)

    def update_car(self,updates,id):
        try:
            query = "UPDATE Lyfter_car_rental.Cars set {} where id={}".format(updates,id)
            self.pg_manager.create_query(query,"")
        except Exception as error:
            print(error)
    
    def delete_car(self,id):
        try:
            query = "Delete From Lyfter_car_rental.Cars where id={}".format(id)
            self.pg_manager.create_query(query,"")
            print("car with id:",id,"deleted successfully")
        except Exception as error:
            print("not able to remove user due to error",error)





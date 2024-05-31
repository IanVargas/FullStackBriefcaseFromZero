from django.db import models

# Create your models here.
class Menu(models.Model):
    plate_name= models.CharField(max_length=30)
    cuisine= models.CharField(max_length=30)
    price= models.IntegerField()
    age=models.IntegerField()

    def __str__(self):
        return self.plate_name + ":" + self.cuisine

class product(models.Model):
    product_name = models.CharField(max_length=40)
    menu_id_item = models.ForeignKey(Menu,on_delete=models.PROTECT,default=None,related_name="menu_id")



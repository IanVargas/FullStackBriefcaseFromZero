from django.urls import path 
from . import views 

urlpatterns = [ 
    path('', views.index, name='index'), 
    path('home/',views.home, name='home'),
    path('date', views.show_time), #it can be set without name
    path('info/demo', views.show_information, name='information') ,
    path('showform/', views.showform),
    path('getuser/', views.qryview) ,
    path("getform/", views.getform),
    path('getuser/<str:name>/<int:id>', views.pathview, name='pathview')    
] 
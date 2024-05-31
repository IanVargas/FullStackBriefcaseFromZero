from django.shortcuts import render
from django.http import HttpResponse 
from datetime import datetime

def index(request): 
    return HttpResponse("Hello, world. This is the index view of Demoapp.")  


def home(request):
    return HttpResponse("<strong>Hla ian</strong>")


def show_time(request):
    date_joined = datetime.today().year
    return HttpResponse(date_joined)

def show_information(request):
    msg = f"""
            <br> method:  {request.method}
            <br> path: {request.path}
            <br> agent: {request.META['HTTP_USER_AGENT']}
        """
    return HttpResponse(msg, content_type='text/html',  charset='UTF-8' )

def pathview(request, name, id):
    return HttpResponse("name : {} userid: {}".format(name,id))


def qryview(request):
    name = request.GET['name'] #you can use requestr . get, delete ... 
    id = request.GET['id']
    return HttpResponse("name : {} userid: {}".format(name,id))

def showform(request):
    return render(request,"form.html")

def getform(request):
    if request.method == "POST":
        id = request.POST['id']
        name = request.POST['name']
    return HttpResponse("name : {} userid: {}".format(name,id))


def show_login_page(request):
    return render(request,'login.html')

def login_check(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
    return HttpResponse("name : {} password: {}".format(username,password))
    
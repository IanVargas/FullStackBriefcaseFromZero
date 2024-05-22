from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    message = "Welcome to Little Lemon!"

    return HttpResponse(message)

def about(request):
    message = "About us"

    return HttpResponse(message)

def menu(request):
    message = "Menu"

    return HttpResponse(message)

def book(request):
    message = "Make a booking"

    return HttpResponse(message)

# Create your views here.

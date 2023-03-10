from multiprocessing import context
from django.shortcuts import render
from django.http import HttpResponse
def home(request):
    return render(request,"cse/template/at/index.html")

# Create your views here.

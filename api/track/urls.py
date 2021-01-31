from django.contrib import admin
from django.shortcuts import render
from django.urls import path, include
from django.conf.urls import url

from . import views

urlpatterns = [
    path('', views.get_csrf, name='api-csrf'),
]

# from allauth.account.views import confirm_email
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from . import views


urlpatterns = [
    path('', views.register_view, name='user-register'),
]
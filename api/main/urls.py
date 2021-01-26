from django.contrib import admin
from django.shortcuts import render
from django.urls import path, include
from django.conf.urls import url


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    url(r'^rest-auth/', include('rest_auth.urls')),
]

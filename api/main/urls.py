from django.contrib import admin
from django.shortcuts import render
from django.urls import path, include
from django.conf.urls import url

from users import urls as userUrls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/register', include(userUrls)),
]

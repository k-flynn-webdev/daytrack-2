from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from . import views


urlpatterns = [
    path('', views.TagList.as_view(), name='tag-list'),
    path('<value>/', views.TagDetail.as_view(), name='tag-detail'),
]

from django.urls import path
from .views import store_list

urlpatterns = [
    path('stores/', store_list, name='store-list'),
]
from django.urls import path
from .views import ItemBase

urlpatterns = [
    path('', ItemBase.as_view()),
    path('<str:name>/', ItemBase.as_view())
]
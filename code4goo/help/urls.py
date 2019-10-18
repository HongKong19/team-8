from django.urls import path
from . import views

urlpatterns = [
    path('help/client/', views.clientListCreate.as_view() ),
]

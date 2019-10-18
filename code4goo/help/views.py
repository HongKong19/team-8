from .models import *
from .serializers import *
from rest_framework import generics

class clientListCreate(generics.ListCreateAPIView):
    queryset = client.objects.all()
    serializer_class = ClientSerializer

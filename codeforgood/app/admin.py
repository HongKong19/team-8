from django.contrib import admin
from .models import Tags, client, event, donation

admin.site.register(Tags)
admin.site.register(client)
admin.site.register(event)
admin.site.register(donation)
# Register your models here.

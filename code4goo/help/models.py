from django.db import models

# Create your models here.
class Tags(models.Model):
    tagID = models.IntegerField(unique = True)
    title = models.CharField(max_length=100)

class client(models.Model):
    clientID = models.IntegerField(unique=True)
    name = models.CharField(max_length=100)
    def __str__(self):
        return str(self.name)

class event(models.Model):
    eventID = models.IntegerField()
    date = models.TimeField()
    name = models.CharField(max_length=100)
    def __str__(self):
        return str(self.name)

class donation(models.Model):
    clientID = models.ForeignKey(client,on_delete = models.CASCADE)
    donation_amt = models.IntegerField()
    date = models.TimeField()





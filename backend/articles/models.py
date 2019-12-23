from django.db import models

# Create your models here.
class Twitters(models.Model):
    name = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    description = models.TextField(default='')

    def __str__(self):
        return self.title


class Article(models.Model):
    title = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    description = models.TextField(default='')
    date = models.DateField(auto_now_add=True,null=True)

    def __str__(self):
        return self.title

class Note(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=500)

class Emails(models.Model):
    email=models.CharField(max_length=255,unique=True)
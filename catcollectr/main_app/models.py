from django.db import models

class Cat(models.Model):
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    age = models.IntegerField()
    
    def __str__(self):
        return self.name

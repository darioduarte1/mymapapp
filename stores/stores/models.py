from django.db import models

class Store(models.Model):
    name = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    client_info = models.TextField(blank=True)

    def __str__(self):
        return self.name
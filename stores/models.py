from django.db import models

class Store(models.Model):
    STATUS_CHOICES = [
        ('ACTIVO', 'Activo'),
        ('VISITADO', 'Visitado'),
        ('NO_INTERESADO', 'No interesado'),
        ('POR_VALIDAR', 'Por validar'),
    ]

    name = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='ACTIVO')

    address = models.CharField(max_length=255, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    last_visit = models.DateField(null=True, blank=True)
    description = models.TextField(blank=True)
    systems = models.JSONField(blank=True, null=True)
    client_info = models.TextField(blank=True)

    def __str__(self):
        return self.name
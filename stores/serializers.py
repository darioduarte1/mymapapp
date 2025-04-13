from rest_framework import serializers
from .models import Store

class StoreSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True)
    latitude = serializers.FloatField(required=True)
    longitude = serializers.FloatField(required=True)
    address = serializers.CharField(required=False, allow_blank=True)
    phone = serializers.CharField(required=False, allow_blank=True)
    last_visit = serializers.DateField(required=False, allow_null=True)
    description = serializers.CharField(required=False, allow_blank=True)
    systems = serializers.JSONField(required=False, allow_null=True)
    client_info = serializers.CharField(required=False, allow_blank=True)
    status = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Store
        fields = [
            'id', 'name', 'latitude', 'longitude', 'address', 'phone',
            'last_visit', 'description', 'systems', 'client_info', 'status'
        ]
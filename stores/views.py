from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Store
from .serializers import StoreSerializer

@api_view(['GET', 'POST'])
def store_list(request):
    if request.method == 'GET':
        stores = Store.objects.all()
        serializer = StoreSerializer(stores, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        print("📥 Datos recibidos:", request.data)
        serializer = StoreSerializer(data=request.data)
        if serializer.is_valid():
            store = serializer.save()
            return Response(StoreSerializer(store).data, status=201)
        else:
            print("❌ Errores del serializer:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
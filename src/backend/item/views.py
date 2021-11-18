import logging
import traceback
from .models import Item
from django.core import serializers
from rest_framework import views, generics, status
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import ItemSerializer

logger = logging.getLogger("django")

class ItemBase(views.APIView):
    
    renderer_classes = [JSONRenderer]

    def get(self, request, *args, **kwargs):
        try:
            if self.kwargs.get('name') == None:
                query = Item.objects.all()
            else:
                query = Item.objects.filter(name=self.kwargs.get('name'))
            response = serializers.serialize('json', query)
            return Response(response)
        except:
            logger.error(traceback.format_exc())
            Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request, *args, **kwargs):
        try:
            serializer = ItemSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except:
            logger.error(traceback.format_exc())
            Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, *args, **kwargs):
        try:
            target = Item.objects.get(name=self.kwargs.get('name'))
            serializer = ItemSerializer(target, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except:
            logger.error(traceback.format_exc())
            Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, *args, **kwargs):
        try:
            target = Item.objects.filter(name=self.kwargs.get('name'))
            if target:
                target.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except:
            logger.error(traceback.format_exc())
            Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
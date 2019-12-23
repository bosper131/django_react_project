from django.http import JsonResponse
from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,DestroyAPIView, UpdateAPIView
# Create your views here.
from django.views import View
from articles.models import Article, Twitters,Emails
from rest_framework import permissions
from .serializers import ArticleSerializer,TwittersSerializer,EmailSerializer
from .permissions import CheckIfAdminView


class CheckIfSuperuserview(View):
    def get(self,request):
        return JsonResponse({'is_superuser':request.user.is_superuser})

class TwitterListView(ListAPIView):
    queryset= Twitters.objects.all()
    serializer_class = TwittersSerializer

from rest_framework import viewsets

class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permission_classes = [CheckIfAdminView]


class EmailListView(CreateAPIView):
    queryset= Emails.objects.all()
    serializer_class = EmailSerializer
from rest_framework import serializers
from articles.models import Twitters,Article,Emails


class TwittersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Twitters
        fields = ("name", "link","image", "description")


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields=('id',"title", "link", "description")

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emails
        fields=('email',)
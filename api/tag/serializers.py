from rest_framework import serializers
from tag import models.Tag as Tag


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ['id', 'user', 'value', 'created_at']

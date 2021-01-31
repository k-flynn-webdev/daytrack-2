from rest_framework import serializers
from . import models
from tag.serializers import TagSerializer


class TrackSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)

    class Meta:
        model = models.Track
        fields = ['id', 'user', 'value', 'tags', 'updated_at', 'created_at']

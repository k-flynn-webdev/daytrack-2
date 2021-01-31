from rest_framework import serializers
from track import models.Track as Track


class TrackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Track
        fields = ['id', 'user', 'value', 'tags', 'updated_at', 'created_at']

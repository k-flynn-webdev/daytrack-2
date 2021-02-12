from rest_framework import serializers
from . import models

from track import models as TrackModel


class TagSerializer(serializers.ModelSerializer):

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'user': instance.user.id,
            'value': instance.value,
            'created_at': instance.created_at,
            'count_all': instance.track_set.all().count(),
        }

    class Meta:
        model = models.Tag
        fields = ['id', 'user', 'value', 'created_at']


class TagDetailSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'user': instance.user.id,
            'value': instance.value,
            'created_at': instance.created_at,
            'count_all': instance.track_set.all().count(),
            'count_user': TrackModel.Track.objects.filter(user=instance.user).filter(tags=instance.id).count()
        }


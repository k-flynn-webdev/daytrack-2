from django.contrib.auth.decorators import login_required
from django.core.exceptions import ValidationError
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from rest_framework import serializers as testSerializers
from rest_framework.settings import api_settings
from .validate import validate

from . import models
from . import serializers
from tag.helpers import tags_from_input


@login_required
@api_view(['GET', 'POST', 'PATCH', 'DELETE'])
def tracks(request):
    pagination_class = api_settings.DEFAULT_PAGINATION_CLASS

    if request.user.id is None:
        return JsonResponse({ 'detail': 'User not logged in' }, status=403)

    if request.method == 'GET':

        paginator = pagination_class()
        query_set = models.Track.objects.filter(user=request.user)
        context = paginator.paginate_queryset(query_set, request)
        serializer = serializers.TrackSerializer(context, many=True)
        return paginator.get_paginated_response(serializer.data)

    if request.method == 'POST':

        data = request.data
        value = data.get('value')
        user = request.user

        try:
            tags = tags_from_input(data.get('tags'), user)
            validate({ 'user': user, 'value': value })
            track = models.Track.objects.create(user=user, value=value)
            track.tags.set(tags)
            track.save()
        except testSerializers.ValidationError as e:
            return JsonResponse({'detail': e.detail }, status=400)

        track_details = serializers.TrackSerializer(track)

        return JsonResponse({
            'detail': 'Successfully created track.',
            'results': track_details.data
        })




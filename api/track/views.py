from django.contrib.auth.decorators import login_required
from django.core.exceptions import ValidationError
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view

from . import models
from . import serializers
from tag.helpers import tags_from_input


@login_required
@api_view(['GET', 'POST', 'PATCH', 'DELETE'])
def tracks(request):

    if request.user.id is None:
        return JsonResponse({ 'detail': 'User not logged in' }, status=403)

    if request.method == 'GET':

        tracks_found = models.Track.objects.filter(user=request.user)
        track_details = serializers.TrackSerializer(tracks_found, many=True)

        return JsonResponse({
            'detail': 'Successfully found tracks.',
            'data': track_details.data
        })

    if request.method == 'POST':
        data = request.data
        value = data.get('value')

        try:
            tags = tags_from_input(data.get('tags'), request.user)
            track = models.Track.objects.create(user=request.user, value=value)
            track.tags.set(tags)
            track.save()
        except ValidationError:
            return JsonResponse({'detail': 'Track could not be saved'}, status=400)

        track_details = serializers.TrackSerializer(track)

        return JsonResponse({
            'detail': 'Successfully created track.',
            'data': track_details.data
        })




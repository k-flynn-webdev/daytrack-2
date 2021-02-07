# from django.shortcuts import render
# from django.views.decorators.http import require_GET, require_POST
# from django.views.decorators.csrf import ensure_csrf_cookie
# from rest_framework.permissions import IsAuthenticated
# from django.utils.decorators import method_decorator
# from django.http import JsonResponse, HttpResponse
# from django.middleware.csrf import get_token
# from rest_framework.parsers import JSONParser
# from rest_framework.decorators import api_view
# from rest_framework.views import APIView
# from django.views.generic import View
# import json
#
# from . import models
# from . import serializers
#
#
# @api_view(['GET', 'POST', 'PATCH', 'DELETE'])
# def tags(request):
#
#     if request.user.id is None:
#         return JsonResponse({ 'detail': 'User not logged in' }, status=403)
#
#     if request.method == 'GET':
#
#         tagsFound = models.Tag.objects.filter(user=request.user)
#         tagDetails = serializers.TagSerializer(tagsFound, many=True)
#
#         return JsonResponse({
#             'detail': 'Successfully found tags.',
#             'data': tagDetails.data
#         })
#
#     if request.method == 'POST':
#         data = request.data
#         value = data.get('value')
#         tags = data.get('tags')
#
#         try:
#             track = models.Track.objects.create(user=request.user, value=value)
#             track.save()
#         except AnException:
#             print(AnException)
#             return JsonResponse({'detail': 'Track could not be saved'}, status=400)
#
#         trackDetails = serializers.TrackSerializer(track)
#
#         return JsonResponse({
#             'detail': 'Successfully created track.',
#             'data': trackDetails.data
#         })
from django.http import JsonResponse
from rest_framework import mixins
from rest_framework import generics

from tag.serializers import TagSerializer, TagDetailSerializer
from tag.models import Tag


class TagDetail(
    # mixins.RetrieveModelMixin,
#     mixins.UpdateModelMixin,
#     mixins.DestroyModelMixin,
    generics.GenericAPIView):

    queryset = Tag.objects.all()
    serializer_class = TagDetailSerializer
    lookup_field = 'value'
    lookup_url_kwarg = 'value'

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)

        return JsonResponse({
            'detail': 'Successfully found',
            'results': serializer.data
        })

#     def patch(self, request, *args, **kwargs):
#         return self.update(request, *args, **kwargs)

#     def delete(self, request, *args, **kwargs):
#         return self.destroy(request, *args, **kwargs)


class TagList(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    generics.GenericAPIView):

    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


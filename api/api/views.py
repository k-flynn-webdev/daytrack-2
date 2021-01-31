import json

from django.contrib.auth import authenticate, login, logout
from django.views.generic import View
from django.http import JsonResponse, HttpResponse
from django.middleware.csrf import get_token
from django.views.decorators.http import require_GET, require_POST
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

@require_GET
def get_csrf(request):
    response = HttpResponse(status=204)
    response['HTTP_X_CSRFTOKEN'] = get_token(request)
    return response

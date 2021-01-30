import json

from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_POST
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


@require_POST
def register_view(request):
    data = json.loads(request.body)
    email = data.get('email')
    password1 = data.get('password1')
    password2 = data.get('password2')

    if email is None or password1 is None or password2 is None:
        return JsonResponse({'detail': 'Please provide email and password.'}, status=400)

    user = authenticate(username=username, password=password)

    if user is None:
        return JsonResponse({'detail': 'Invalid credentials.'}, status=400)

    login(request, user)
    return JsonResponse({'detail': 'Successfully logged in.'})

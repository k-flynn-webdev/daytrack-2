from rest_framework import serializers
from django import forms

def validate(data):
    print(data)

    user = data['user']
    value = data['value']

    if user.id is None:
        raise serializers.ValidationError('Tag missing User')

    if len(value) < 10:
        raise serializers.ValidationError('Tag Value too short, must be chars long(5)')

    return data

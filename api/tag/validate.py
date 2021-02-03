from rest_framework import serializers

min_tag_length = 3

""" validate Tag data """


def validate(data):
    user = data['user']
    value = data['value']

    if user.id is None:
        raise serializers.ValidationError('Tag missing User')

    if type(value) is not str:
        raise serializers.ValidationError('Tag Value is not a string')

    if len(value) < min_tag_length:
        raise serializers.ValidationError(f'Tag Value too short, must  be ({min_tag_length}) long')

    return data

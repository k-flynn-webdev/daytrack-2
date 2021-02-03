from rest_framework import serializers

min_track_length = 5

""" validate Track data """


def validate(data):
    user = data['user']
    value = data['value']

    if user.id is None:
        raise serializers.ValidationError('Track missing User')

    if len(value) < min_track_length:
        raise serializers.ValidationError(f'Track Value too short, must  be ({min_track_length}) long')

    return data

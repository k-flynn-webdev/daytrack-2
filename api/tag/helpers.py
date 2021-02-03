from .models import Tag
from .validate import validate
from rest_framework import serializers


""" Returns tags from a input list

    :param      {str|str[]|object[]}    raw     A list containing [objects or strings]
    :param      {object}                user    User creating the tag
    :returns    {Tags[]}
"""


def tags_from_input(raw: list, user: object):
    tags = []

    # if a object
    if type(raw) is object:
        return [raw]

    # if a string
    if type(raw) is str and len(raw) > 0:
        raw = raw.split(' ')

    # if a list
    if type(raw) is list:

        finalItems = []

        # cleanup any possible string values
        for b in raw:
            if type(b) is str:
                tmpStr = b.split(' ')
                for c in tmpStr:
                    finalItems.append(c)

        for d in finalItems:
            if type(d) is object:
                tags.append(item)

            if type(d) is str:
                try:
                    obj = Tag.objects.get(value=d)
                except Tag.DoesNotExist:
                    validate({ 'value': d, 'user': user })
                    obj = Tag.objects.create(value=d, user=user)
                    obj.save()

                tags.append(obj)

    return tags

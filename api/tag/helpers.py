from .models import Tag


""" Returns tags from a input list 

    :param      {str[]|object[]}    A list containing [objects or strings]
    :returns    {Tags[]}
"""

def tags_from_input(raw: list):

    for item in raw:
        if type(item) is str:
            print(item)


    allTags = Tag.objects.get_or_create()


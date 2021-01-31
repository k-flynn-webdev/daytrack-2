from django.contrib.auth import get_user_model as user_model
from django.core.validators import MinLengthValidator
from django.db import models
from tag.models import Tag

User = user_model()


# Create your models here.
class Track(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tracks', related_query_name='track')
    value = models.CharField(max_length=255, blank=False, default='', validators=[MinLengthValidator(11)])
    tags = models.ForeignKey(Tag, on_delete=models.DO_NOTHING, related_name='tags', related_query_name='tag', blank=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['updated_at']
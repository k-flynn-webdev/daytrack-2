from django.db import models
from django.contrib.auth import get_user_model as user_model

User = user_model()

# Create your models here.
class Track(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tracks', related_query_name='track')
    value = models.CharField(max_length=255, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created']
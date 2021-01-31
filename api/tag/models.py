from django.contrib.auth import get_user_model as user_model
from django.core.validators import MinLengthValidator
from django.db import models

User = user_model()

# Create your models here.
class Tag(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='tags', related_query_name='tag')
    users = models.ManyToManyField(User, db_table='tag_to_user')
    value = models.CharField(max_length=255, unique=True, blank=False, validators=[MinLengthValidator(3)])
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']
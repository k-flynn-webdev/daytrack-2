# Generated by Django 3.1.4 on 2021-01-31 23:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('track', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='track',
            options={'ordering': ['-updated_at']},
        ),
    ]

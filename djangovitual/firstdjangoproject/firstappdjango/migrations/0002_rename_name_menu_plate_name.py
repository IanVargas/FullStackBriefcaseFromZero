# Generated by Django 5.0.5 on 2024-05-26 22:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('firstappdjango', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='menu',
            old_name='name',
            new_name='plate_name',
        ),
    ]
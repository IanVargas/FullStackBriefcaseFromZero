# Generated by Django 5.0.5 on 2024-05-26 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('cuisine', models.CharField(max_length=30)),
                ('price', models.IntegerField()),
            ],
        ),
    ]

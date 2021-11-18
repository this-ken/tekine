from django.db import models

class Item(models.Model):
    name = models.CharField(primary_key=True, max_length=255)
    count = models.IntegerField()
    owner = models.CharField(max_length=255)
    class Meta:
        db_table = 'ITEMS'
        managed = False
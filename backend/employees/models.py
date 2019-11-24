from django.db import models

class Person(models.Model):
    last_name = models.CharField(max_length=128)
    first_name = models.CharField(max_length=128)
    birth_date = models.DateField()

class Employee(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    employee_num = models.CharField(max_length=16)
    employee_date = models.DateField()
    terminated_date = models.DateField(default=None, blank=True, null=True)

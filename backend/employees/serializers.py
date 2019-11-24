from .models import Person, Employee
from rest_framework import serializers


class PersonSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Person
        fields = ['id', 'last_name', 'first_name', 'birth_date']


class EmployeeSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    person = PersonSerializer(many=False, read_only=False)
    class Meta:
        model = Employee
        fields = ['id', 'employee_num', 'employee_date', 'terminated_date', 'person']
    def create(self, validated_data):
        person = Person(last_name=validated_data.get('person').get('last_name'), first_name=validated_data.get('person').get('first_name'), birth_date=validated_data.get('person').get('birth_date'))
        person.save()
        employee = Employee.objects.create(person=person, employee_num=validated_data.get('employee_num'), employee_date=validated_data.get('employee_date'), terminated_date=validated_data.get('terminated_date'))
        employee.save()
        return employee
    def update(self, instance, validated_data):
        employee = Employee.objects.get(id=instance.id)
        employee.employee_num = validated_data.get('employee_num')
        employee.employee_date = validated_data.get('employee_date')
        employee.terminated_date = validated_data.get('terminated_date')
        person = Person.objects.get(id=employee.person.id)
        person.first_name = validated_data.get('person').get('first_name')
        person.last_name = validated_data.get('person').get('last_name')
        person.birth_date = validated_data.get('person').get('birth_date')
        person.save()
        employee.person = person
        employee.save()
        return employee

from django.utils.decorators import method_decorator
from rest_framework import viewsets
from drf_yasg.utils import swagger_auto_schema
from .models import Person, Employee
from .serializers import PersonSerializer, EmployeeSerializer

@method_decorator(name='list', decorator=swagger_auto_schema(operation_description='List all',))
@method_decorator(name='create', decorator=swagger_auto_schema(operation_description='Create',))
@method_decorator(name='retrieve', decorator=swagger_auto_schema(operation_description='Retrieve',))
@method_decorator(name='update', decorator=swagger_auto_schema(operation_description='Update',))
@method_decorator(name='partial_update', decorator=swagger_auto_schema(operation_description='Partial update',))
@method_decorator(name='destroy', decorator=swagger_auto_schema(operation_description='Destroy',))
class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    http_method_names = ['head', 'get', 'post', 'put', 'patch', 'delete']

@method_decorator(name='list', decorator=swagger_auto_schema(operation_description='List all',))
@method_decorator(name='create', decorator=swagger_auto_schema(operation_description='Create',))
@method_decorator(name='retrieve', decorator=swagger_auto_schema(operation_description='Retrieve',))
@method_decorator(name='update', decorator=swagger_auto_schema(operation_description='Update',))
@method_decorator(name='partial_update', decorator=swagger_auto_schema(operation_description='Partial update',))
@method_decorator(name='destroy', decorator=swagger_auto_schema(operation_description='Destroy',))
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    http_method_names = ['head', 'get', 'post', 'put', 'patch', 'delete']

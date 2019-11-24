from django.urls import include, path
from django.conf.urls import url
from django.views.generic.base import RedirectView
from rest_framework import routers
from rest_framework_swagger.views import get_swagger_view
from . import views

schema_view = get_swagger_view(title='Employees API')

router = routers.DefaultRouter()
router.register(r'persons', views.PersonViewSet)
router.register(r'employees', views.EmployeeViewSet)

urlpatterns = [
    url(r'^$', schema_view),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

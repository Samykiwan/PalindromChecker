from django.urls import path
from . import views

app_name = 'palindromchecker'

urlpatterns = [
    path('process_word/', views.process_word, name='process_word'),
    path('hello/', views.hello, name='hello'),
]

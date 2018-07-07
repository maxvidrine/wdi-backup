from django.urls import path

from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('users/', views.user_list, name='user_list'),
    path('users/<int:pk>', views.user_detail, name='user_detail'),
    path('posts/new', views.post_create, name='post_create'),
    path('comments/new', views.comment_create, name='comment_create'),
]

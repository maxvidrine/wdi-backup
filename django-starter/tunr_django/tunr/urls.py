from django.urls import path
from . import views

urlpatterns = [
    path('', views.artist_list, name='artist_list'),
    path('artists/<int:pk>', views.artist_detail, name='artist_detail'),
    path('songs/', views.songs_list, name='songs_list'),
    path('songs/<int:pk>', views.song_detail, name='song_detail'),
    path('artists/new', views.artists_create, name='artist_create'),
]
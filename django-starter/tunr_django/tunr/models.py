from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
    	return self.name

class Song(models.Model):
    title = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='songs')
    album = models.CharField(max_length=100)
    # album = models.ForeignKey(Album, on_delete=models.CASCADE, related_name='songs')
    preview_url = models.TextField()

    def __str__(self):
    	return self.title

# class Album(models.Model):
#     album_name = models.CharField(max_length=100)
#     artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='albums')
#     song = models.ForeignKey(Song, on_delete=models.CASCADE, related_name='albums')
#     release_date = models.DateField()

#     def __str__(self):
#     	return self.album_name
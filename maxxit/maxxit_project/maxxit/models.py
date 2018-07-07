from django.db import models

class User(models.Model):
    name = models.CharField(max_length=10)
    image_url = models.TextField()
    email = models.TextField()

    def __str__(self):
        return self.name

class Post(models.Model):
    subject = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    image_url = models.TextField()
    text = models.TextField()

    def __str__(self):
        return self.subject

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    text = models.TextField()

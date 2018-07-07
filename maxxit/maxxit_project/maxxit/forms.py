from django import forms
from .models import User, Post, Comment

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ('subject', 'user', 'image_url', 'text',)

class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        fields = ('user', 'post', 'text',)

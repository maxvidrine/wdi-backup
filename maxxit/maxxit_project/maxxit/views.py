from django.shortcuts import render, redirect
from .models import User, Post, Comment
from .forms import PostForm, CommentForm

def user_list(request):
	users = User.objects.all()
	return render(request, 'user_list.html', {'users': users})

def post_list(request):
	posts = Post.objects.all()
	comments = Comment.objects.all()
	# Iterate through posts:
	for post in posts:
		# filter the comments to pull comments by post.id
		# try pushing into a post.comments array
		post_comments = []
		for comment in comments:
			post_comments.append(filter(comment.post == post.subject, comment))
			# if unable, turn into a dict by calling list(post)
	return render(request, 'post_list.html', {'posts': posts, 'comments': post_comments})

def user_detail(request, pk):
	user = User.objects.get(id=pk)
	posts = user.posts.all()
	return render(request, 'user_detail.html', {'user': user, 'posts': posts})

def post_create(request):
	if request.method == 'POST':
		form = PostForm(request.POST)
		if form.is_valid():
			# post = form.save(commit=False)
			# post.author = post.user
			post.save()
			return redirect('post_list')
	else:
		form = PostForm()
	return render(request, 'post_create.html', {'form': form})

def comment_create(request):
	if request.method == 'POST':
		form = CommentForm(request.POST)
		if form.is_valid():
			create = form.save()
			return redirect('post_list')
	else:
		form = CommentForm()
	return render(request, 'comment_create.html', {'form': form})

def comment_list(request):
	comments = Comment.objects.all()
	return render(request, 'comment_list.html', {'comments': comments})

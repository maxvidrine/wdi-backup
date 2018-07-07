from django.shortcuts import render

from .models import Artist, Song

def artist_list(request):
    artists = Artist.objects.all()
    return render(request, 'tunr/artist_list.html', {'artists': artists})

def artist_detail(request, pk):
    artist_detail = Artist.objects.get(id=pk)
    return render(request, 'tunr/artist_detail.html', {'artist': artist_detail})

def song_list(request):
    songs = Song.objects.all()
    return render(request, 'tunr/song_list.html', {'songs': songs})

def song_detail(request, pk):
    song_detail = Song.objects.get(id=pk)
    return render(request, 'tunr/song_detail.html', {'song': song_detail})

def artist_create(request):
	if request.method == 'POST':
		form = ArtistForm(request.POST)
		if form.is_valid():
			artist = form.save()
			return redirect('artist_detail', pk=artist.pk)
		else:
			form = ArtistForm()
		return render(request, 'tunr/song_form.html', {'form': form})
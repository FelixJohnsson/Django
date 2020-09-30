from django.shortcuts import render
from django.http import HttpResponse

savedLocations = [
    {
        'user': 'admin',
        'title': 'Favorite restaurant',
        'description': 'This is our chosen restaurant.',
        'date_added': '2020-09-29'
    }
]

def home(request):
    locations = {
        'markers': savedLocations
    }
    return render(request, 'Placeeo/home.html', locations)

import requests
import os
import random
from dotenv import load_dotenv
from flask import Flask, render_template, request

# Load environment variables from .env file
load_dotenv()

# Access the API key
api_key = os.getenv("API_KEY")

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get movie name
        movie_name = request.form.get('movie_name')

        # Get the release date
        release_year_from = request.form.get('release_year_from')
        release_year_to = request.form.get('release_year_to')

        # Check if user input release date (advanced search)
        if release_year_from and release_year_to:
            url = f"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte={release_year_from}-01-01&primary_release_date.lte={release_year_to}-12-31&sort_by=popularity.desc"
        elif release_year_from:
            url = f"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte={release_year_from}-01-01&sort_by=popularity.desc"
        elif release_year_from:
            url = f"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.lte={release_year_to}-12-31&sort_by=popularity.desc"
        else:
            # Regular search
            url = f"https://api.themoviedb.org/3/search/movie?query={movie_name}&include_adult=false&language=en-US&page=1"

        # Make the API call
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {api_key}"
        }
        response = requests.get(url, headers=headers)

        # Convert the data to JSON
        data = response.json()

        # Check if "I'm feeling lucky" button is clicked
        if 'feeling_lucky' in request.form:
            # Get a random movie from the list of results
            random_movie = random.choice(data['results'])
            # Return only the random movie instead of the entire list
            return render_template('index.html', movies=[random_movie], movie_name=movie_name)

        return render_template('index.html', movies=data['results'], movie_name=movie_name)

    return render_template('index.html', movies=[])

if __name__ == '__main__':
    app.run(debug=True)

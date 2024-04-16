import requests
import os
import random
from dotenv import load_dotenv
from flask import Flask, render_template, request

# Load environment variables from .env file
load_dotenv()

# Access the API key
api_key = os.getenv("API_KEY")

base_url = "https://api.themoviedb.org/3"

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    # Fetch list of genres from the API
    url = f"{base_url}/genre/movie/list?language=en"

    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    response = requests.get(url, headers=headers)
    data = response.json()
    genres = data['genres']

    if request.method == 'POST':
        # Get movie name
        movie_name = request.form.get('movie_name')

        # Get the release date
        release_year_from = request.form.get('release_year_from')
        release_year_to = request.form.get('release_year_to')

        # Get the genre ID
        genre_id = request.form.get('genre_id')

        # Check if user input release date or genre (advanced search)
        if release_year_from or release_year_to or genre_id:
            # Common URL for advanced search
            url = f"{base_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
            # Add necessary components to the common URL
            if release_year_from:
                url += f"&primary_release_date.gte={release_year_from}-01-01"
            if release_year_from:
                url += f"&primary_release_date.lte={release_year_to}-12-31"
            if genre_id:
                url += f"&with_genres={genre_id}"
        else:
            # Regular search
            url = f"{base_url}/search/movie?query={movie_name}&include_adult=false&language=en-US&page=1"

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
            return render_template('index.html', movies=[random_movie], genres=genres)

        return render_template('index.html', movies=data['results'], genres=genres)

    return render_template('index.html', movies=[], genres=genres)

if __name__ == '__main__':
    app.run(debug=True)

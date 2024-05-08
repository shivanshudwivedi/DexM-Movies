from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
CORS(app, support_credentials=True)

TMDB_BASE_URL = "https://api.themoviedb.org/3"
ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjNjOTdkZDY5NWIxMThlN2FjZTQ5Mzc3ZjVkMTM2MSIsInN1YiI6IjY2MGM1MGZhOWM5N2JkMDE2M2E0MGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vYaf37o3QbtWISpotA5EkQLIjA5NPvhHnVLgNBBpOvI"

def tmdb_request(endpoint, method="GET", **kwargs):
    """Helper function to make TMDB API requests."""
    url = f"{TMDB_BASE_URL}/{endpoint}"
    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {ACCESS_TOKEN}"
    }
    if method == "GET":
        response = requests.get(url, headers=headers, params=kwargs)
    elif method == "POST":
        response = requests.post(url, headers=headers, json=kwargs)
    return response.json()

@app.route('/authentication/guest_session/new', methods=['GET'])
def create_guest_session():
    """Endpoint to create a new guest session via TMDB API."""
    response = tmdb_request("authentication/guest_session/new")
    return jsonify(response)

@app.route('/movie/popular', methods=['GET'])
def get_popular_movies():
    response = tmdb_request("movie/popular")
    return jsonify(response)

@app.route('/tv/popular', methods=['GET'])
def get_popular_tv_shows():
    response = tmdb_request("tv/popular")
    return jsonify(response)

@app.route('/movie/<int:movie_id>', methods=['GET'])
def get_movie_details(movie_id):
    response = tmdb_request(f"movie/{movie_id}")
    return jsonify(response)

@app.route('/tv/<int:tv_id>', methods=['GET'])
def get_tv_details(tv_id):
    response = tmdb_request(f"tv/{tv_id}")
    return jsonify(response)

@app.route('/search/movie', methods=['GET'])
def search_movies():
    query = request.args.get('query')
    response = tmdb_request("search/movie", query=query)
    return jsonify(response)

@app.route('/search/tv', methods=['GET'])
def search_tv_shows():
    query = request.args.get('query')
    response = tmdb_request("search/tv", query=query)
    return jsonify(response)

@app.route('/movie/<int:movie_id>/rate', methods=['POST'])
@cross_origin()
def rate_movie(movie_id):
    rating = request.get_json().get('value')
    if not rating:
        return jsonify({'error': 'Missing rating value'}), 400
    response = tmdb_request(f"movie/{movie_id}/rating", method="POST", value=rating)
    if 'success' not in response or not response['success']:
        return jsonify(response), 400
    return jsonify(response)

@app.route('/tv/<int:tv_id>/rate', methods=['POST'])
@cross_origin()
def rate_tv_show(tv_id):
    rating = request.get_json().get('value')
    if not rating:
        return jsonify({'error': 'Missing rating value'}), 400
    response = tmdb_request(f"tv/{tv_id}/rating", method="POST", value=rating)
    if 'success' not in response or not response['success']:
        return jsonify(response), 400
    return jsonify(response)

@app.route('/rated/movies', methods=['GET'])
def get_rated_movies():
    response = tmdb_request("account/21180265/rated/movies", language="en-US", sort_by="created_at.asc")
    return jsonify(response)

@app.route('/rated/tv', methods=['GET'])
def get_rated_tv_shows():
    response = tmdb_request("account/21180265/rated/tv", language="en-US", sort_by="created_at.asc")
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
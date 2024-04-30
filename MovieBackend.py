from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NkNzkzNGI5MjVjMDU1ZGIxNGViNzU3MDEwYmVhYiIsInN1YiI6IjY2MGM1MGZhOWM5N2JkMDE2M2E0MGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yd3grqYXesMBqLsF7QBjFzYAXZpvln0zsv3wX0OsfA0'

@app.route('/api/auth/guest', methods=['GET'])
def authenticate_guest():
    url = 'https://api.themoviedb.org/3/authentication/guest_session/new'
    headers = {'Authorization': f'Bearer {API_KEY}'}
    response = requests.get(url, headers=headers)
    return jsonify(response.json())

# Here add the other routes we need for the backend
@app.route('/api/movie/rate/<int:movie_id>', methods=['POST'])
def rate_movie(movie_id):
    rating = request.json.get('value')
    url = f'https://api.themoviedb.org/3/movie/{movie_id}/rating'
    headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': f'Bearer {API_KEY}'
    }
    data = {'value': rating}
    try:
        response = requests.post(url, headers=headers, json=data)
        return jsonify(response.json())
    except Exception as e:
        print('Error rating movie:', e)
        return jsonify({'error': 'Error rating movie'})

@app.route('/api/tv/rate/<int:tv_show_id>', methods=['POST'])
def rate_tv_show(tv_show_id):
    rating = request.json.get('value')
    url = f'https://api.themoviedb.org/3/tv/{tv_show_id}/rating'
    headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': f'Bearer {API_KEY}'
    }
    data = {'value': rating}
    try:
        response = requests.post(url, headers=headers, json=data)
        return jsonify(response.json())
    except Exception as e:
        print('Error rating TV show:', e)
        return jsonify({'error': 'Error rating TV show'})
    
@app.route('/api/movies/popular', methods=['GET'])
def fetch_movies():
    url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    headers = {'Authorization': f'Bearer {API_KEY}'}
    response = requests.get(url, headers=headers)
    return jsonify(response.json())

@app.route('/api/tv/popular', methods=['GET'])
def fetch_tv_shows():
    url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
    headers = {'Authorization': f'Bearer {API_KEY}'}
    response = requests.get(url, headers=headers)
    return jsonify(response.json())
    
if __name__ == '__main__':
    app.run()
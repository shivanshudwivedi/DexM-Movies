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

if __name__ == '__main__':
    app.run()
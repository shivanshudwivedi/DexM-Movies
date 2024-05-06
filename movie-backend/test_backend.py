import unittest
import json
from MovieBackend import app  # Import your Flask app

class FlaskTestCase(unittest.TestCase):
    def setUp(self):
        """Set up a test client before each test."""
        self.app = app.test_client()
        self.app.testing = True

    def test_get_popular_movies(self):
        """Test get_popular_movies()"""
        response = self.app.get('/movie/popular')
        self.assertEqual(response.status_code, 200)
        self.assertIn('total_results', response.json)

    def test_get_popular_tv_show(self):
        """Test get_popular_tv_show()"""
        response = self.app.get('/tv/popular')
        self.assertEqual(response.status_code, 200)
        self.assertIn('total_results', response.json)
        
    def test_get_movie_details(self):
        """Test get_movie_details()"""
        response = self.app.get('/movie/559969')
        self.assertEqual(response.status_code, 200)
        self.assertIn('El Camino: A Breaking Bad Movie', response.json['title'])
        
    def test_get_tv_details(self):
        """Test get_tv_details()"""
        response = self.app.get('/tv/1396')
        self.assertEqual(response.status_code, 200)
        self.assertIn('Breaking Bad', response.json['name'])
        
    def test_search_movies(self):
        """Test search_movies()"""
        response = self.app.get('/search/movie?query=el camino')
        self.assertEqual(response.status_code, 200)
        self.assertIn('total_results', response.json)
        
    def test_search_tv_shows(self):
        """Test search_tv_shows()"""
        response = self.app.get('/search/tv?query=breaking bad')
        self.assertEqual(response.status_code, 200)
        self.assertIn('total_results', response.json)
        
    def test_rate_movie_success(self):
        """Test rate_movie()"""
        response = self.app.post('/movie/559969/rate', json={
            "value" : 10
        })
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json['success'])
        
    def test_rate_movie_fail(self):
        """Test rate_movie()"""
        response = self.app.post('/movie/559969/rate', json={
            "foo" : "bar"
        })
        self.assertEqual(response.status_code, 400)
        self.assertIn("error", response.json)
        
    def test_rate_tv_show_success(self):
        """Test rate_tv_show()"""
        response = self.app.post('/movie/1396/rate', json={
            "value" : 10
        })
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json['success'])
        
    def test_rate_tv_show_fail(self):
        """Test rate_tv_show()"""
        response = self.app.post('/movie/1396/rate', json={
            "foo" : "bar"
        })
        self.assertEqual(response.status_code, 400)
        self.assertIn("error", response.json)
        
    def test_get_rated_movies(self):
        """Test get_rated_movies()"""
        response = self.app.get('/rated/movies')
        self.assertEqual(response.status_code, 200)
        self.assertIn('total_results', response.json)
    
    def test_get_rated_tv_shows(self):
        """Test get_rated_tv_shwos()"""
        response = self.app.get('/rated/tv')
        self.assertEqual(response.status_code, 200)
        self.assertIn('total_results', response.json)

if __name__ == '__main__':
    unittest.main()
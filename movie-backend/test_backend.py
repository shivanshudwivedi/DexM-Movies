import unittest
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
        response = self.app.get('/movie/12')
        self.assertEqual(response.status_code, 200)
        self.assertIn('overview', response.json)
        
    def test_get_tv_details(self):
        """Test get_tv_details()"""
        response = self.app.get('/tv/12')
        self.assertEqual(response.status_code, 200)
        self.assertIn('overview', response.json)
        
    def test_search_movies(self):
        """Test search_movies()"""
        response = self.app.get('/search/movie?query=finding nemo')
        self.assertEqual(response.status_code, 200)
        self.assertIn('total_results', response.json)
        

if __name__ == '__main__':
    unittest.main()
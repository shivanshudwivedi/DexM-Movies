import unittest
import json
from MovieBot import app  # Import your Flask app

class FlaskTestCase(unittest.TestCase):
    def setUp(self):
        """Set up a test client before each test."""
        self.app = app.test_client()
        self.app.testing = True
        
    def test_chat_success(self):
        """Test rate_tv_show()"""
        response = self.app.post('/chat', json={
            "message" : "hello"
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('reply', response.json)
        
    def test_chat_fail(self):
        """Test rate_tv_show()"""
        response = self.app.post('/chat', json={
            "foo" : "bar"
        })
        self.assertEqual(response.status_code, 400)
        self.assertIn('No input provided', response.json['reply'])
        
if __name__ == '__main__':
    unittest.main()
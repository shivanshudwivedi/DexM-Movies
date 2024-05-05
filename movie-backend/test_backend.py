import unittest
from app import app  # Import your Flask app

class FlaskTestCase(unittest.TestCase):
    def setUp(self):
        """Set up a test client before each test."""
        self.app = app.test_client()
        self.app.testing = True

    def test_home_status_code(self):
        """Test the home route."""
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)

    def test_authentication_guest_session(self):
        """Test the guest session creation."""
        response = self.app.get('/authentication/guest_session/new')
        self.assertEqual(response.status_code, 200)
        self.assertIn('guest_session_id', response.json)

if __name__ == '__main__':
    unittest.main()
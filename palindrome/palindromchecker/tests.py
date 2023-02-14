

# Create your tests here.
from django.test import Client, TestCase

class PalindromeCheckerTest(TestCase):
    def setUp(self):
        self.client = Client()

    def test_process_word_url(self):
        response = self.client.post('/checker/process-word/', {'word': 'racecar'})
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(str(response.content, encoding='utf8'), {'is_palindrome': True, 'middle_letter': None})

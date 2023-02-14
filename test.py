import requests

url = 'http://localhost:8000/checker/process_word/'

data = {
    'word': 'fkjfd'
}

response = requests.post(url, data=data)

print(response.json())

from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

#Return to home page when lick on Home
@app.route('/index.html', methods=['GET'])
def list():
    return render_template('index.html')

#Gets the User ID and directs to the bookList page/http://localhost:8082/bookList/{book_id}
@app.route('/result', methods=['POST'])
def result():
    book_id = request.form['book_id']
    print(f'Book ID: {book_id}')
    url = f'http://localhost:8082/bookList/{book_id}'
    response = requests.get(url)
    result = response.json()
    return render_template('result.html', result=result)

#Direct to info page when lick on Information
@app.route('/info.html', methods=['GET'])
def info():
    return render_template('info.html')

#Gets the book ID and directs to the info_result page/http://localhost:8081/books/{book_info_id}
@app.route('/info_result', methods=['POST'])
def info_result():
    book_info_id = request.form['book_info_id']
    print(f'Book ID: {book_info_id}')
    url_info = f'http://localhost:8081/books/{book_info_id}'
    response_info = requests.get(url_info)
    result_info = response_info.json()
    return render_template('info_result.html', result_info=result_info)


#Direct to rating page when lick on Rating
@app.route('/rating.html', methods=['GET'])
def rating():
    return render_template('rating.html')

#Gets the book ID and directs to the rating_result page/http://localhost:8083/rating/{book_rating_id}
@app.route('/rating_result', methods=['POST'])
def rating_result():
    book_rating_id = request.form['book_rating_id']
    print(f'Book ID: {book_rating_id}')
    url_rating = f'http://localhost:8083/ratings/{book_rating_id}'
    response_rating = requests.get(url_rating)
    result_rating = response_rating.json()
    return render_template('rating_result.html', result_rating=result_rating)


if __name__ == '__main__':
    app.run(debug=True)

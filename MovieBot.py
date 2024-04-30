from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

API_URL = "https://api-inference.huggingface.co/models/google/gemma-7b"
headers = {"Authorization": "Bearer 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"}

def query_model(prompt):
    payload = {"inputs": prompt}
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    if not user_message:
        return jsonify({'reply': 'No input provided'}), 400

    try:
        model_response = query_model(user_message)
        reply = model_response.get('generated_text', 'No reply generated')
        return jsonify({'reply': reply})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)

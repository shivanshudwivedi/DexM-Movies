from flask import Flask, request, jsonify
from flask_cors import CORS
from flasgger import Swagger
import requests

app = Flask(__name__)
CORS(app)
Swagger(app)

API_URL = "https://api-inference.huggingface.co/models/google/gemma-2b"
headers = {"Authorization": "Bearer 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"}

def query_model(prompt):
    """Query the Hugging Face model API."""
    payload = {"inputs": prompt}
    response = requests.post(API_URL, headers=headers, json=payload)
    if response.status_code != 200:
        return {"error": "Failed to fetch response from Hugging Face API", "details": response.text}
    response_data = response.json()
    print("DEBUG: API Response:", response_data) # Debugging output
    return response_data

@app.route('/chat', methods=['POST'])
def chat():
    """
    Receives a message from the user, sends it to the Hugging Face model, and returns the model's response.

    ---
    parameters:
      - name: message
        in: body
        required: true
        schema:
          type: object
          properties:
            message:
              type: string
    responses:
      200:
        description: Successful response
        schema:
          type: object
          properties:
            reply:
              type: string
      400:
        description: No input provided
        schema:
          type: object
          properties:
            reply:
              type: string
      500:
        description: Error from the Hugging Face API
        schema:
          type: object
          properties:
            error:
              type: string
            details:
              type: string
    """
    data = request.json
    user_message = data.get('message', '')

    if not user_message:
        return jsonify({'reply': 'No input provided'}), 400

    model_response = query_model(user_message)
    print("DEBUG: Model response:", model_response) # Further debugging

    # Check if the response is a list and has at least one element
    if isinstance(model_response, list) and model_response:
        # Assume the needed information is in the first dictionary of the list
        model_response = model_response[0]

    if 'error' in model_response:
        return jsonify({'error': model_response['error'], 'details': model_response.get('details')}), 500

    # Fetching 'generated_text' from the dictionary
    reply = model_response.get('generated_text', 'No reply generated') if isinstance(model_response, dict) else "Unexpected response format"

    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
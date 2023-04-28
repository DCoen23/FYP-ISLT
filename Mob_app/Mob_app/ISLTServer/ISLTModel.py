from flask import Flask, jsonify, request
from tensorflow import keras
import numpy as np

app = Flask(__name__)

# Load the trained model
model = keras.models.load_model('C:/Users/darra/OneDrive/Desktop/IsltModel/model.h5')

# Define a route for the API
@app.route('/predict', methods=['POST'])
def predict():
    # Get the image data from the request
    data = request.get_json()['data']
    image = np.array(data).reshape(1, 300, 300, 1)
    
    # Make a prediction
    prediction = model.predict(image)[0]
    label = np.argmax(prediction)

    # Return the prediction as a JSON response
    return jsonify({'label': label})

# Start the server
if __name__ == '__main__':
    app.run()
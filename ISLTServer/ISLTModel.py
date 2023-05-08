from flask import Flask, jsonify, request
from tensorflow import keras
import numpy as np
from PIL import Image
from io import BytesIO
import base64

app = Flask(__name__)

# Load the trained model
model = keras.models.load_model('C:/Users/darra/OneDrive/Desktop/IsltModel/model.h5')

# Define a route for the API
@app.route('/predict', methods=['POST'])
def predict():
    # Get the base64 image data from the request
    image_data = request.json['data']
    decoded_image_data = base64.b64decode(image_data)

    # Open the image using PIL
    image = Image.open(BytesIO(decoded_image_data)).convert('L')
    image = image.resize((300, 300))

    # Convert the image to a NumPy array
    np_image = np.asarray(image).reshape(1, 300, 300, 1)

    # Make a prediction
    prediction = model.predict(np_image)[0]
    label_index = int(np.argmax(prediction))  # Convert the label to a native Python int

    # Map the label index to the class name
    class_names = ['rock', 'paper', 'scissors']
    class_name = class_names[label_index]

    # Return the prediction as a JSON response
    return jsonify({'label': class_name})

# Start the server
if __name__ == '__main__':
    app.run(host='0.0.0.0')

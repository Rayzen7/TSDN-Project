import cv2
import numpy as np
from flask import Flask, jsonify, request
from image_matching.image_matcher import match_images  
import os

app = Flask(__name__)

def read_nutritional_info(fruit_name):
    try:
        with open(f"data/{fruit_name}_data.txt", "r") as file:
            return file.read()
    except FileNotFoundError:
        return f"Data untuk {fruit_name} tidak ditemukan."

@app.route('/api/nutritional/<fruit_name>', methods=['GET'])
def get_nutritional_info(fruit_name):
    data = read_nutritional_info(fruit_name)
    return jsonify({"nutritional_info": data})

def is_primary_color_present(image_path, target_color):
    img = cv2.imread(image_path)
    hsv_img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lower_bound = np.array([target_color[0] - 10, 100, 100])
    upper_bound = np.array([target_color[0] + 10, 255, 255])
    mask = cv2.inRange(hsv_img, lower_bound, upper_bound)
    masked_img = cv2.bitwise_and(img, img, mask=mask)
    non_zero_pixels = cv2.countNonZero(cv2.cvtColor(masked_img, cv2.COLOR_BGR2GRAY))
    total_pixels = img.shape[0] * img.shape[1]
    return non_zero_pixels / total_pixels > 0.1  # Jika lebih dari 10% gambar memiliki warna target

@app.route('/api/match_image', methods=['POST'])
def match_image():
    try:
        uploaded_image = request.files['image']
        uploaded_image_path = 'test/uploaded_image.jpg'
        if not os.path.exists('test'):
            os.makedirs('test')
        uploaded_image.save(uploaded_image_path)

        asset_image_path = 'assets/pisang.jpg'

        if not is_primary_color_present(uploaded_image_path, target_color=(30, 255, 255)):  # Warna kuning
            return jsonify({"message": "Gambar tidak cocok, warna dominan bukan kuning"}), 400

        is_matched = match_images(uploaded_image_path, asset_image_path)

        if is_matched:
            return jsonify({"message": "Gambar cocok", "fruit": "pisang"})
        else:
            return jsonify({"message": "Gambar tidak cocok"}), 400

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5700)

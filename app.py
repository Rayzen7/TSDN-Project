from flask import Flask, jsonify, request
from image_matching.image_matcher import match_images  

app = Flask(__name__)

# Fungsi untuk membaca data gizi dari file
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

@app.route('/api/match_image', methods=['POST'])
def match_image():
    try:
        # Mendapatkan gambar yang di-upload
        uploaded_image = request.files['image']
        uploaded_image_path = 'uploaded_image.jpg'
        uploaded_image.save(uploaded_image_path)

        # Path gambar aset (misalnya pisang)
        asset_image_path = 'data/pisang.jpg'

        # Menyocokkan gambar yang di-upload dengan gambar aset
        is_matched = match_images(uploaded_image_path, asset_image_path)

        if is_matched:
            return jsonify({"message": "Gambar cocok", "fruit": "pisang"})
        else:
            return jsonify({"message": "Gambar tidak cocok"})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5501)

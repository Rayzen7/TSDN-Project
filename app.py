from flask import Flask, jsonify, request
from image_matching.image_matcher import match_images  

app = Flask(__name__)

def read_nutritional_info(fruit_name):
    try:
        with open(f"data/{fruit_name}_data.txt", "r") as file:
            lines = file.readlines()
            nutritional_info = {
                "kalori": lines[1].split(":")[1].strip(),
                "karbohidrat": lines[2].split(":")[1].strip(),
                "protein": lines[3].split(":")[1].strip(),
                "lemak": lines[4].split(":")[1].strip(),
                "serat": lines[5].split(":")[1].strip()
            }
            return nutritional_info
    except FileNotFoundError:
        return {"error": f"Data untuk {fruit_name} tidak ditemukan."}

@app.route('/api/nutritional/<fruit_name>', methods=['GET'])
def get_nutritional_info(fruit_name):
    data = read_nutritional_info(fruit_name)
    return jsonify({fruit_name: data})

if __name__ == '__main__':
    app.run(debug=True, port=5700)

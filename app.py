from flask import Flask, jsonify, request
import cv2
import numpy as np

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

@app.route('/api/match_image', methods=['POST'])
def match_image():
    try:
        uploaded_image = request.files['image']
        uploaded_image_path = 'test/uploaded_image.jpg'
        uploaded_image.save(uploaded_image_path)

        image = cv2.imread(uploaded_image_path)
        hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

        yellow_lower = np.array([20, 100, 100])
        yellow_upper = np.array([40, 255, 255])
        red_lower1 = np.array([0, 100, 100])
        red_upper1 = np.array([10, 255, 255])
        red_lower2 = np.array([0, 56, 93])
        red_upper2 = np.array([180, 255, 255])

        yellow_mask = cv2.inRange(hsv, yellow_lower, yellow_upper)
        red_mask1 = cv2.inRange(hsv, red_lower1, red_upper1)
        red_mask2 = cv2.inRange(hsv, red_lower2, red_upper2)

        red_mask = cv2.bitwise_or(red_mask1, red_mask2)

        yellow_area = cv2.countNonZero(yellow_mask)
        red_area = cv2.countNonZero(red_mask)

        total_area = image.shape[0] * image.shape[1]

        yellow_percentage = (yellow_area / total_area) * 100
        red_percentage = (red_area / total_area) * 100

        threshold = 30

        if yellow_percentage > threshold:
            fruit = "Pisang"
            color_check = "kuning"
        elif red_percentage > threshold:
            fruit = "Apel"
            color_check = "merah"
        else:
            fruit = "Tidak Dikenali"
            color_check = "tidak teridentifikasi"

        if (fruit == "Pisang" and color_check != "kuning") or (fruit == "Apel" and color_check != "merah"):
            return jsonify({"error": f"Warna {color_check} tidak sesuai dengan {fruit}. Harus {fruit.lower()}."})

        return jsonify({"fruit": fruit, "color_check": color_check})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5700, host="192.168.14.69")
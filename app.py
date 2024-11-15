from flask import Flask, jsonify, request
import cv2
import numpy as np

app = Flask(__name__)

def read_nutritional_info(fruit_name):
    try:
        with open(f"data/{fruit_name}_data.txt", "r") as file:
            lines = file.readlines()
            nutritional_info = {
                "kalori": float(lines[1].split(":")[1].strip().split()[0]),
                "karbohidrat": float(lines[2].split(":")[1].strip().split()[0]),
                "protein": float(lines[3].split(":")[1].strip().split()[0]),
                "lemak": float(lines[4].split(":")[1].strip().split()[0]),
                "serat": float(lines[5].split(":")[1].strip().split()[0])
            }
            return nutritional_info
    except FileNotFoundError:
        return {"error": f"Data untuk {fruit_name} tidak ditemukan."}
    except ValueError as e:
        return {"error": f"Format data tidak valid: {e}"}

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

        # Yellow
        yellow_light_lower = np.array([20, 50, 100])
        yellow_light_upper = np.array([30, 200, 255])
        yellow_dark_lower = np.array([25, 200, 100])
        yellow_dark_upper = np.array([35, 255, 255])

        # Red
        red_light_lower = np.array([0, 50, 100])
        red_light_upper = np.array([10, 150, 255])
        red_dark_lower1 = np.array([0, 150, 100])
        red_dark_upper1 = np.array([10, 255, 255])
        red_dark_lower2 = np.array([170, 150, 100])
        red_dark_upper2 = np.array([180, 255, 255])

        # Green
        green_light_lower = np.array([35, 100, 100])
        green_light_upper = np.array([50, 255, 255])
        green_medium_lower = np.array([50, 100, 100])
        green_medium_upper = np.array([70, 255, 255])
        green_dark_lower = np.array([70, 50, 50])
        green_dark_upper = np.array([85, 255, 255])

        # Greenish Yellow
        greenish_yellow_lower = np.array([30, 100, 100])
        greenish_yellow_upper = np.array([35, 255, 255])

        # Masks
        yellow_light_mask = cv2.inRange(hsv, yellow_light_lower, yellow_light_upper)
        yellow_dark_mask = cv2.inRange(hsv, yellow_dark_lower, yellow_dark_upper)
        red_light_mask = cv2.inRange(hsv, red_light_lower, red_light_upper)
        red_dark_mask1 = cv2.inRange(hsv, red_dark_lower1, red_dark_upper1)
        red_dark_mask2 = cv2.inRange(hsv, red_dark_lower2, red_dark_upper2)
        green_light_mask = cv2.inRange(hsv, green_light_lower, green_light_upper)
        green_medium_mask = cv2.inRange(hsv, green_medium_lower, green_medium_upper)
        green_dark_mask = cv2.inRange(hsv, green_dark_lower, green_dark_upper)
        greenish_yellow_mask = cv2.inRange(hsv, greenish_yellow_lower, greenish_yellow_upper)

        # Mask
        yellow_mask = cv2.bitwise_or(yellow_light_mask, yellow_dark_mask)
        red_mask = cv2.bitwise_or(red_light_mask, cv2.bitwise_or(red_dark_mask1, red_dark_mask2))
        green_mask = cv2.bitwise_or(
            cv2.bitwise_or(
                green_light_mask,
                green_medium_mask
            ),
            cv2.bitwise_or(green_dark_mask, greenish_yellow_mask)
        )

        # Area Calculation
        yellow_area = cv2.countNonZero(yellow_mask)
        red_area = cv2.countNonZero(red_mask)
        green_area = cv2.countNonZero(green_mask)

        total_area = image.shape[0] * image.shape[1]

        yellow_percentage = (yellow_area / total_area) * 100
        red_percentage = (red_area / total_area) * 100
        green_percentage = (green_area / total_area) * 100

        threshold = 20

        if green_percentage > threshold:
            fruit = "Melon"
            color_check = "hijau"
        elif yellow_percentage > threshold:
            fruit = "Pisang"
            color_check = "kuning"
        elif red_percentage > threshold:
            fruit = "Apel"
            color_check = "merah"
        else:
            fruit = "Tidak Dikenali"
            color_check = "tidak teridentifikasi"

        if (fruit == "Pisang" and color_check != "kuning") or (fruit == "Apel" and color_check != "merah") or (fruit == "Melon" and color_check != "hijau"):
            return jsonify({"error": f"Warna {color_check} tidak sesuai dengan {fruit}. Harus {fruit.lower()}."})

        return jsonify({"fruit": fruit, "color_check": color_check})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5700)
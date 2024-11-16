import cv2
import numpy as np

def match_images(captured_image_path, asset_image_path):
    captured_img = cv2.imread(captured_image_path, cv2.IMREAD_GRAYSCALE)
    asset_img = cv2.imread(asset_image_path, cv2.IMREAD_GRAYSCALE)

    orb = cv2.ORB_create()
    kp1, des1 = orb.detectAndCompute(captured_img, None)
    kp2, des2 = orb.detectAndCompute(asset_img, None)

    bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
    matches = bf.match(des1, des2)

    matches = sorted(matches, key=lambda x: x.distance)

    if len(matches) > 10:
        return True
    return False

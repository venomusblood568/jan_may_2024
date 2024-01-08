import cv2
from ultralytics import YOLO

def main():
    # Open webcam
    cap = cv2.VideoCapture(0)

    # Load YOLO model
    model = YOLO("yolov8l.pt")

    while True:
        # Read frame from the webcam
        ret, frame = cap.read()

        # Perform object detection using YOLO
        result = model(frame, agnostic_nms=True)[0]

        # Display the live feed
        cv2.imshow("Live Feed", frame)

        # Break the loop if 'ESC' key is pressed
        if cv2.waitKey(1) == 27:
            break

    # Release the webcam and close all windows
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()

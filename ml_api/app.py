from flask import Flask
from flask import request
from flask import make_response

import sys


from human_detection import HumanDetector
from intent_prediction import Adapter
print(f"{(sys.path[0])}/detectorModel/")



intent_predictor = Adapter(f"{(sys.path[0])}/detectorModel/")
print("Intent initialized")
detector = HumanDetector()

print("Detector initialized")
app = Flask(__name__)




@app.route('/')
def hello_world():
    print(request.values)
    res = make_response()
    res.status_code = 200
    res.data = request.values
    return res


if __name__ == '__main__':
    app.run()

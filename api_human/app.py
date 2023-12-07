from flask import Flask
from flask import request
from flask import make_response
from flask import jsonify

import sys


from human_detection import HumanDetector
from person_prediction import Predictor
print(f"{(sys.path[0])}/detectorModel/")


print(f"{sys.path[0]}/person_prediction.joblib")
predictor = Predictor(f"{sys.path[0]}/person_prediction.joblib")

detector = HumanDetector()

print("Detector initialized")

app = Flask(__name__)



@app.route('/detection')
def detection():
    return jsonify({'detection': detector.get_persons(request.values['url'])})
@app.route('/prediction',methods=['POST'])
def prediction():
    data = []
    data.append(request.json['history'])
    prediction =  predictor.predict(data)
    return jsonify({'prediction':prediction})

@app.route('/',methods=['POST'])
def hello_world():
    print(request.values)
    res = make_response()
    res.status_code = 200
    res.data = request.values
    return res


if __name__ == '__main__':
    app.run(port=6970)

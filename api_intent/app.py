from flask import Flask
from flask import request
from flask import jsonify

import sys
from intent_prediction import Adapter

intention_predictor = Adapter(f"{(sys.path[0])}/intentionModel/")

print("Intention initialized")

app = Flask(__name__)




@app.route('/intention',methods=['GET'])
def intention_predict():
    print(request.json)
    prompt = request.json['prompt']
    return jsonify({'intentions': intention_predictor.get_response(prompt)})


if __name__ == '__main__':
    app.run(port=6969)

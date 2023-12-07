import joblib
import pandas as pd


class Predictor:
    def __init__(self, model_path):
        self.model = joblib.load(model_path)

    def predict(self, data_json) -> float:
        data = pd.read_json(data_json)
        return int(self.model.predict(data))

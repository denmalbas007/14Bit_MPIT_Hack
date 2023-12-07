import joblib
import pandas as pd


class Predictor:
    def __init__(self, model_path, data_path):
        self.model = joblib.load(model_path)
        self.data = pd.read_json(data_path)

    def predict(self) -> float:
        return int(self.model.predict(self.data))

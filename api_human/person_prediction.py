import joblib
import pandas as pd


class Predictor:
    def __init__(self, model_path):
        self.model = joblib.load(model_path)

    def predict(self, data_json) -> float:
        data = pd.DataFrame.from_dict(data_json)

        data.reset_index(level=0, inplace=True, drop=True)

        return int(self.model.predict(data))
import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

model_api = Flask(__name__)

model = pickle.load(open("trained_model.pkl", "rb"))

@model_api.route("/")
def Home():
    return render_template("index.html")

@model_api.route("/predict", methods = ["POST"])
def predict():
    float_features = [float(x) for x in request.form.values()]
    features = [np.array(float_features)]
    prediction = model.predict(features)

    return render_template("index.html", prediction_text= "Autism {}".format(prediction))

if __name__ == "__main__":
    model_api.run(debug=True)

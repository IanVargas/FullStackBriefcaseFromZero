from flask import *


app = Flask(__name__)



@app.route("/hello")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == '__main__' :
    app.run(host="localhost", port=50000,debug=True)

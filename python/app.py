
import sqlite3
from flask import Flask, render_template, request
from flask import json
from flask import g

app = Flask(__name__)


@app.route("/" , methods=['GET'])
def index():	
	return render_template('index.html', rt_message='hello world')


if __name__ == "__main__":
    app.run(port=80)
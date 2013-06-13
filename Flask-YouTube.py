from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/other_site')
def other_site():
    return render_template('other_site.html')


if __name__ == '__main__':
    app.run(debug=True)

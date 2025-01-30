from flask  import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
from pydantic import BaseModel

app = Flask(__name__, static_folder='build', static_url_path='')
CORS(app)

data=[
    {   "id":1,
        "Name": "Ogunleye Adeola",
        "Job": "Engineer",
        "Address": "21 Boleyn Close, Walthamstow, London, UK"
    },
    {    "id":2,
        "Name": "Akeem Baba",
        "Job": "Carpenter",
        "Address": "42, Hackney Central"
    },
    {   "id":3,
        "Name": "Muniru Atilogun",
        "Job": "Barber",
        "Address": "25 Stoke Newington"
    },
    {   "id":4,
        "Name": "Oke Afeez",
        "Job": "Driver",
        "Address": "27 London Bridge"
    },
    
]

@app.route('/')
def serve_react():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/api/data", methods=['GET'])
def get_data():
    return jsonify(data)

class LoginRequest(BaseModel):
    email: str
    password: str

@app.route("/api/login", methods=["POST"])
def login():
    input=LoginRequest.parse_raw(request.data)
    print(input.email, input.password)
    return jsonify({
        "email":"ogunleye@gmail.com",
        "password":"123456"
    })

if __name__ == '__main__':
    app.run(debug=True)

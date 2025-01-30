import pandas as pd
from datetime import datetime, timedelta
from jose import JWTError, jwt
from IPython.display import display


SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

fake_users_db = {
    "ogunleye@gmail.com": {
        "email": "ogunleye@gmail.com",
        "password": "123456",
    }
}


data = [
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

def authenticate_user(email: str, password: str):
    user = fake_users_db.get(email)
    if not user or user["password"] != password:
        return None
    return user

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def search_data_csv(search):
    df=pd.read_csv("/home/adeola/my-react-app2/webserver/physicians_us.csv")
    ##display(df)
    df=df[["Last Name", "First Name", "Gender", "NPI", "License Number"]][:5]
    df_dict=df.to_dict('records')
    return df_dict

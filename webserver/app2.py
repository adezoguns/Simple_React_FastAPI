from fastapi import FastAPI, Request,  Depends, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from datetime import datetime, timedelta
from jose import JWTError, jwt
from pydantic import BaseModel
from database_utils import DB_UTILS
import asyncio
import utils


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
query_db= DB_UTILS()

@app.get("/api/data")
async def fetch_data():
    # Simulate a long network operation
    await asyncio.sleep(1)
    return JSONResponse(content=jsonable_encoder(utils.data))


class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/api/login")
async def login(request: LoginRequest):
    await asyncio.sleep(0.5)  # Simulate delay (optional)
    return {
        "email": request.email,
        "password": request.password, 
    }


class RegistrationRequest(BaseModel):
    firstname: str
    lastname: str
    email: str
    password: str
    re_password: str

@app.post("/api/registration")
async def login(request: RegistrationRequest):
    await asyncio.sleep(0.5)  # Simulate delay (optional)
    return {
        "firstname": request.firstname,
        "lastname": request.lastname,
        "email": request.email,
        "password": request.password, 
        "re_password": request.re_password
    }

class TokenRequest(BaseModel):
    email: str
    password: str


@app.post("/api/token")
async def login(request: TokenRequest):
    user = utils.authenticate_user(request.email, request.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token = utils.create_access_token({"sub": user["email"]})
    return {"access_token": access_token, "token_type": "bearer"}


class SearchRequest(BaseModel):
    search: str

@app.post("/api/search")
async def login(request: SearchRequest):
    result = utils.search_data_csv(request.search)
    return result

class SearchDBRequest(BaseModel):
    parent: str
    child: str

@app.post("/api/search_db")
async def login(request: SearchDBRequest):
    query_text=f"""select classification, 
                    specialization, 
                    first_name as firstname, 
                    last_name as lastname, 
                    ---middle_name, 
                    mailing_address_city as city, 
                    mailing_address_state as state
                    from physician where classification ='{request.parent}' and specialization='{request.child}'
                    limit 10;"""
    result = query_db.get_dict_from_dataframe(query_text)
    return result
import os
import logging
import random, string
import json
import pandas as pd
from IPython.display import display
from sqlalchemy import create_engine
from datetime import datetime
from dotenv import dotenv_values
import psycopg2

config = dotenv_values(".env")

root_path= os.path.dirname(os.path.realpath(__file__))

def connect_db():
    """
    Establish a connection to the PostgreSQL database.

    Returns:
        conn: A connection object to the PostgreSQL database.
    """
    try:
        conn = psycopg2.connect(
            host=config["HOST"],
            port=config["PORT"],
            database=config["SCHEMA"],
            user=config["USER"],
            password=config["PASSWORD"],
        )
        return conn
    except Exception as e:
        print(f"Error: {str(e)}")
        return None



def query_db():
    connection = psycopg2.connect(database=config["SCHEMA"], user=config["USER"], 
                                  password=config["PASSWORD"], host=config["HOST"], port=config["PORT"])
    cursor = connection.cursor()
    cursor.execute("select  from physician limit 10;")
    # Fetch all rows from database
    record = cursor.fetchall()

    print("Data from Database:- ", record)

    

def query_engine_db(query_text):
    engine = create_engine(f'postgresql://postgres:{config["PASSWORD"]}@{config["HOST"]}:5432/{config["SCHEMA"]}')
    data_frame = pd.read_sql( 
        query_text, 
        con=engine)  
    display(data_frame) 
    return data_frame



def insert_dataframe_into_db(db_table, schema, data_frame):
    
    #"postgresql://postgres:{}@{}/{}".format("admin", "localhost", "Talos")
    ###print(config["password"])
    engine = create_engine(f"postgresql://postgres:{config['PASSWORD']}@{config['HOST']}:{config['PORT']}/{config['USER']}")
    data_frame.to_sql(db_table, engine, schema=schema)


def generate_dict():

    query_text="""select 
                    classification, 
                    specialization
                    from physician
                    where classification <>'' and specialization<>'';
                    """
    df = query_engine_db(query_text)

    result_dict={}

    for i, row in df.iterrows():
        if row["classification"] not in list(result_dict.keys()):
            if len(row["specialization"].strip()) >2:
                result_dict[row["classification"]]={row["specialization"]:{}}

        elif row["classification"] in list(result_dict.keys()):
            if len(row["specialization"].strip()) >2:
                result_dict[row["classification"]].update({row["specialization"]:{}})
        else:
            print("Not caught")
    
    #print(result_dict)

    with open(f"{root_path}/search.json", "w") as f:
        json.dump(result_dict, f)


if __name__=="__main__":
    generate_dict()


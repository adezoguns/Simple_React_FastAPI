import pandas as pd
from sqlalchemy import create_engine
from dotenv import dotenv_values


config = dict(dotenv_values("/home/adeola/my-react-app2/.env"))

class DB_UTILS:

    def __init__(self):
        
        self.conn_params=f'postgresql://postgres:{config["PASSWORD"]}@{config["HOST"]}:5432/{config["SCHEMA"]}'

    def query_engine_db(self, query_text):
        """Helps query the database and return a dataframe
            ARGS: 
                query_text: This is the SQL part to query the database"""
        try:
            engine = create_engine(self.conn_params)
            data_frame = pd.read_sql( 
                query_text, 
                con=engine)  
            return data_frame
        except Exception as e:
            raise Exception(f"Error: {e}")

    def insert_dataframe_into_db(self, db_table, schema, data_frame):
        """Helps to insert a dataframe into a database
            ARGS:
                db_table: This is the database table
                schema: This is the schema of the database
                data_frameL This is the dataframe we woild love to insert into the DB"""
        try:
            engine = create_engine(self.conn_params)
            data_frame.to_sql(db_table, engine, schema=schema)
        except Exception as e:
            raise Exception(f"Error: {e}")

    def get_dict_from_dataframe(self, query_text):
        """Helps query the database and return a dict
            ARGS: 
                query_text: This is the SQL part to query the database"""
        try:
            df = self.query_engine_db(query_text)
            return df.to_dict('records')
        except Exception as e:
            raise Exception(f"Error: {e}")
        









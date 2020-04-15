# flask dependencies
from flask import Flask
from flask import render_template 
from flask import jsonify

# sql alchemy dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func


# # Define the database connection parameters
# import config
# # get username and password from config.py
# username = config.username
# password = config.password 
# #username = "postgres"
# #password = "postgres"

# ### define database variable    
# database_name = 'Population' # Created in Week 9, Night 1, Exercise 08-Stu_CRUD 
# connection_string = f'postgresql://{username}:{password}@localhost:5432/{database_name}'


# # Connect to the database
# engine = create_engine(connection_string)

# # reflect an existing database into a new model
# base = automap_base()

# # reflect the tables
# base.prepare(engine, reflect=True)

# # Save reference to the table
# ### update table name
# #table = base.classes.tablename
# un_sex_population = base.classes.un_sex_population
# young_to_elder = base.classes.young_to_elder

# Flask Setup
# Instantiate the Flask application
app = Flask(__name__)

##### look into page caching
# disable page caching
#app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# flask app routes
# index.html route
@app.route("/")
def IndexRoute():
    ''' This function runs when the browser loads the index route. 
        Note that the html file must be located in a folder called templates. '''

    webpage = render_template("index.html")
    return webpage

# # route to query database for population pyramid 
# @app.route("/pop_pyramid_data")
# def QuerySexPopulation():
#     ''' Query the database for population numbers and return the results as a JSON. '''

#     # Open a session, run the query, and then close the session again
#     session = Session(engine)
#     #### EXAMPLE RESULTS QUERY BELOW
#     #results = session.query(table.country, table.iso3, table.totalpopulation).all()
#     ###########
#     results = session.query(un_sex_population.Year,
#                             un_sex_population.Sex,
#                             un_sex_population.r_0_4, 
#                             un_sex_population.r_5_9,
#                             un_sex_population.r_10_14,
#                             un_sex_population.r_15_19,
#                             un_sex_population.r_20_24,
#                             un_sex_population.r_25_29,
#                             un_sex_population.r_30_34,
#                             un_sex_population.r_35_39,
#                             un_sex_population.r_40_44,
#                             un_sex_population.r_45_49,
#                             un_sex_population.r_50_54,
#                             un_sex_population.r_55_59,
#                             un_sex_population.r_60_64,
#                             un_sex_population.r_65_69,
#                             un_sex_population.r_70_74,
#                             un_sex_population.r_75_79,
#                             un_sex_population.r_80_84,
#                             un_sex_population.r_85_89,
#                             un_sex_population.r_90_94,
#                             un_sex_population.r_95_99,
#                             un_sex_population.r_100_105).all()
#     session.close 

#     ###########
#     #EXAMPLE DIC LIST BELOW
#     ###########

#     # Create a list of dictionaries, with each dictionary containing one row from the query. 
#     # all_population = []
#     # for country, iso3, totalpopulation in results:
#     #     dict = {}
#     #     dict["country"] = country
#     #     dict["iso3"] = iso3
#     #     dict["totalpopulation"] = totalpopulation
#     #     all_population.append(dict)

#     ###########
#     sex_population = []
#     for Year, Sex, r_0_4, r_5_9, r_10_14, r_15_19, r_20_24, r_25_29, r_30_34, r_35_39, r_40_44, r_45_49, r_50_54, r_55_59, r_60_64, r_65_69, r_70_74, r_75_79, r_80_84, r_85_89, r_90_94, r_95_99, r_100_105 in results:
#         dict = {}

#         dict["Year"] = Year
#         dict["Sex"] = Sex
#         dict["r_0_4"] = r_0_4
#         dict["r_5_9"] = r_5_9 
#         dict["r_10_14"] = r_10_14
#         dict["r_15_19"] = r_15_19
#         dict["r_20_24"] = r_20_24
#         dict["r_25_29"] = r_25_29
#         dict["r_30_34"] = r_30_34
#         dict["r_35_39"] = r_35_39
#         dict["r_40_44"] = r_40_44
#         dict["r_45_49"] = r_45_49
#         dict["r_50_54"] = r_50_54
#         dict["r_55_59"] = r_55_59
#         dict["r_60_64"] = r_60_64
#         dict["r_65_69"] = r_65_69
#         dict["r_70_74"] = r_70_74
#         dict["r_75_79"] = r_75_79
#         dict["r_80_84"] = r_80_84
#         dict["r_85_89"] = r_85_89
#         dict["r_90_94"] = r_90_94
#         dict["r_95_99"] = r_95_99
#         dict["r_100_105"] = r_100_105
      
#         sex_population.append(dict)

#     # Return the jsonified result. 
#     return jsonify(sex_population)

# @app.route("/age_stacked_area_data")
# def QueryAgePopulation():
#     ''' Query the database for population numbers and return the results as a JSON. '''

#     # Open a session, run the query, and then close the session again
#     session = Session(engine)
#     #### EXAMPLE RESULTS QUERY BELOW
#     #results = session.query(table.country, table.iso3, table.totalpopulation).all()
#     ###########

#     results = session.query(young_to_elder.Country, 
#                             young_to_elder.Year, 
#                             young_to_elder.Young, 
#                             young_to_elder.Working_Age, 
#                             young_to_elder.Elder).all()
#     session.close 

#     age_population = []
#     for Country, Year, Young, Working_Age, Elder in results:
#         dict = {}
#         dict["Country"] = Country
#         dict["Young"] = Young
#         dict["Working_Age"] = Working_Age
#         dict["Elder"] = Elder
#         age_population.append(dict)

#     # Return the jsonified result. 
#     return jsonify(age_population)

# This statement is required for Flask to do its job. 
# Think of it as chocolate cake recipe. 
if __name__ == '__main__':
    app.run(debug=True)
# flask dependencies
from flask import Flask
from flask import render_template 
from flask import jsonify

# sql alchemy dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func


# Define the database connection parameters
import config
# get username and password from config.py
username = config.username
password = config.password 
#username = "postgres"
#password = "postgres"

### define database variable    
database_name = 'Population' # Created in Week 9, Night 1, Exercise 08-Stu_CRUD 
connection_string = f'postgresql://{username}:{password}@localhost:5432/{database_name}'


# Connect to the database
engine = create_engine(connection_string)

# reflect an existing database into a new model
base = automap_base()

# reflect the tables
base.prepare(engine, reflect=True)

# Save reference to the table
un_sex_population = base.classes.un_sex_population
young_to_elder = base.classes.young_to_elder
age_ratio_population = base.classes.age_ratio_population
# Flask Setup
# Instantiate the Flask application
app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

##### look into page caching
# disable page caching
#app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# flask app routes
# index.html route
@app.route("/")
def IndexRoute():
    ''' This function runs when the browser loads the index route. 
        Note that the html file must be located in a folder called templates. '''
    data = QueryAgePopulation()
    data1 = QuerySexPopulation()
    data2 = QueryAgeRatioPopulation()
    #webpage = render_template("index.html")
    webpage = render_template("index.html", data=data)
    return webpage

# route to query database for population pyramid 
@app.route("/pop_pyramid_data")
def QuerySexPopulation():
    ''' Query the database for population numbers and return the results as a JSON. '''

    # Open a session, run the query, and then close the session again
    session = Session(engine)

    results = session.query(un_sex_population.year,
                            un_sex_population.sex,
                            un_sex_population.r_0_4, 
                            un_sex_population.r_5_9,
                            un_sex_population.r_10_14,
                            un_sex_population.r_15_19,
                            un_sex_population.r_20_24,
                            un_sex_population.r_25_29,
                            un_sex_population.r_30_34,
                            un_sex_population.r_35_39,
                            un_sex_population.r_40_44,
                            un_sex_population.r_45_49,
                            un_sex_population.r_50_54,
                            un_sex_population.r_55_59,
                            un_sex_population.r_60_64,
                            un_sex_population.r_65_69,
                            un_sex_population.r_70_74,
                            un_sex_population.r_75_79,
                            un_sex_population.r_80_84,
                            un_sex_population.r_85_89,
                            un_sex_population.r_90_94,
                            un_sex_population.r_95_99,
                            un_sex_population.r_100_105).all()
    session.close 

    sex_population = []
    for year, sex, r_0_4, r_5_9, r_10_14, r_15_19, r_20_24, r_25_29, r_30_34, r_35_39, r_40_44, r_45_49, r_50_54, r_55_59, r_60_64, r_65_69, r_70_74, r_75_79, r_80_84, r_85_89, r_90_94, r_95_99, r_100_105 in results:
        dict = {}

        dict["year"] = year
        dict["sex"] = sex
        dict["0-4"] = r_0_4
        dict["5-9"] = r_5_9 
        dict["10-14"] = r_10_14
        dict["15-19"] = r_15_19
        dict["20-24"] = r_20_24
        dict["25-29"] = r_25_29
        dict["30-34"] = r_30_34
        dict["35-39"] = r_35_39
        dict["40-44"] = r_40_44
        dict["45-49"] = r_45_49
        dict["50-54"] = r_50_54
        dict["55-59"] = r_55_59
        dict["60-64"] = r_60_64
        dict["65-69"] = r_65_69
        dict["70-74"] = r_70_74
        dict["75-79"] = r_75_79
        dict["80-84"] = r_80_84
        dict["85-89"] = r_85_89
        dict["90-94"] = r_90_94
        dict["95-99"] = r_95_99
        dict["100-105"] = r_100_105
      
        sex_population.append(dict)

    # Return the jsonified result. 
    return jsonify(sex_population)

@app.route("/age_stacked_area_data")
def QueryAgePopulation():
    ''' Query the database for population numbers and return the results as a JSON. '''

    # Open a session, run the query, and then close the session again
    session = Session(engine)


    results = session.query(young_to_elder.country, 
                            young_to_elder.year, 
                            young_to_elder.young, 
                            young_to_elder.working_age, 
                            young_to_elder.elder).all()
    session.close 

    age_population = []
    for country, year, young, working_age, elder in results:
        dict = {}
        dict["country"] = country
        dict["year"] = year
        dict["young"] = young
        dict["working_age"] = working_age
        dict["elder"] = elder
        age_population.append(dict)

    # Return the jsonified result. 
    return jsonify(age_population)

@app.route("/age_ratio_scatter_data")
def QueryAgeRatioPopulation():
    ''' Query the database for population numbers and return the results as a JSON. '''

    # Open a session, run the query, and then close the session again
    session = Session(engine)
    #### EXAMPLE RESULTS QUERY BELOW
    #results = session.query(table.country, table.iso3, table.totalpopulation).all()
    ###########

    results = session.query(age_ratio_population.year,
                            age_ratio_population.r_15_year_olds,
                            age_ratio_population.r_20_year_olds,
                            age_ratio_population.r_30_year_olds,
                            age_ratio_population.r_40_year_olds,
                            age_ratio_population.r_50_year_olds,
                            age_ratio_population.r_60_year_olds,
                            age_ratio_population.r_70_year_olds,
                            age_ratio_population.r_80_year_olds,
                            age_ratio_population.r_90_year_olds,
                            age_ratio_population.r_100_year_olds).all()
    session.close 

    age_ratio_pop = []
    for year, r_15_year_olds, r_20_year_olds, r_30_year_olds, r_40_year_olds, r_50_year_olds, r_60_year_olds, r_70_year_olds, r_80_year_olds, r_90_year_olds, r_100_year_olds in results:
        dict = {}
        dict["year"] = year
        dict["r_15_year_olds"] = r_15_year_olds
        dict["r_20_year_olds"] = r_20_year_olds
        dict["r_30_year_olds"] = r_30_year_olds
        dict["r_40_year_olds"] = r_40_year_olds
        dict["r_50_year_olds"] = r_50_year_olds
        dict["r_60_year_olds"] = r_60_year_olds
        dict["r_70_year_olds"] = r_70_year_olds
        dict["r_80_year_olds"] = r_80_year_olds
        dict["r_90_year_olds"] = r_90_year_olds
        dict["r_100_year_olds"] = r_100_year_olds
        age_ratio_pop.append(dict)

    # Return the jsonified result. 
    return jsonify(age_ratio_pop)

# This statement is required for Flask to do its job. 
# Think of it as chocolate cake recipe. 
if __name__ == '__main__':
    app.run(debug=True)
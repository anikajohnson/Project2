<h1>Data Analytics & Visualization Bootcamp</h1>
<h2>Project 2</h2>
<h3>Telling a Story through Data Visualizations</h4>
<br>
<p>The project requirements were to create visualizations by integrating Flask with HTML and JavaScript code as well as a database. The final product must include at least one JavaScript library not covered in class, with a data set of at least 100 records and some level of user-driven interaction.</p>

<p>
We decided our broad topic to be US population over time. We chose this because of the abundant availability of a variety of measures. We ultimately used data from the United Nations and Our World In Data. Specifically, we used three data sets - one that shows the ratio of male births as measured per 100 female births over time, the size of three broad age groups over time, and the population counts by age group for males and females over time.</p>
<ol><b>Step One: The Data</b>
<li>We downloaded data in .CSV format from our sources
<li>We read the data into dataframes, filtered the records for United States only then massaged the format and names
<li>We created a PostgreSQL database with tables matching the formatted data then populated the tables
<li>We set up our Flask server and created the connection routes to jsonify our results in our app.py file
</ol>

<ol><b>Step Two: The Visualizations</b>
<li>We created JavaScript charts based type of data we had - 
  <ol>
  <li>A population pyramid that lists the count of males and females ordered by age group from 1950 to 2015
  <li>A gender ratio line chart that shows the difference in life expectancy between males and females from 1950 to 2015
  <li>A population area graph that shows the percentage of the total populate for three  age groups from 1950 to 2015
  </ol>
<li>We had to reference multiple examples of these types of charts that were created using Plotly and D3 to inform our final product
</ol>

<b>Step Three: The Final Product</b><br>
To recreate our dashboard complete the below steps:
  <ol>
  <li>Clone the repo to your desktop.
  <li>Open PgAdmin and create a new database called "Population".
  <li>Use the Query tool to open the "pop_data.sql" file and run the code to create the database tables.
  <li>Run the Jupyter Notebooks to load the data to the databases.
  <li>Navigate to the folder that contains app.py and launch a GitBash or Terminal.
  <li>Type <code>source activate PythonData</code>
  <li>Type <code>export FLASK_APP=app.py</code>
  <li>Type <code>flask run</code> and keep that window open
  <li>With the Flask server running, load the index page by navigating to http://127.0.0.1:5000/ in your Chrome browser


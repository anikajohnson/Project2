
// show that the JS file was loaded
console.log("loaded stacked.js");

// query the endpoint
d3.json("/age_stacked_area_data").then(function(data) {
    // inspect the JSON
    console.log(data);

//https://plotly.com/javascript/filled-area-plots/
//   var txt = "";
  var yearArray = []; 
  var youngArray = [];
  var workingArray = [];
  var elderArray = [];
  
  yearArray = data.map(x => x.year);
  console.log(yearArray);

  youngArray = data.map(x => x.young);
  console.log(youngArray);

  workingArray = data.map(x => x.working_age);
  console.log(workingArray);

  elderArray = data.map(x => x.elder);
  console.log(elderArray);

  // plot on the html in the right Div
  var plotDiv = document.getElementById('age-stacked-area');
    var traces = [
	{x: yearArray, y: youngArray, stackgroup: 'one', groupnorm:'percent', name: 'Ages birth to 14'},
	{x: yearArray, y: workingArray, stackgroup: 'one', name: 'Ages 15 to 64'},
	{x: yearArray, y: elderArray, stackgroup: 'one', name: 'Ages 65 and better'}
    ];

Plotly.newPlot('age-stacked-area', traces, {title: 'United States Population Percentages by Broad Age Group'});
});
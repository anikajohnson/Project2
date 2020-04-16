// show that the JS file was loaded
console.log("loaded stacked.js");

// query the endpoint
d3.json("/age_stacked_area_data").then(function(data) {
    // inspect the JSON
    console.log(data);
    
    function filteredAgeRange(young) {
        return young.year > 1949;
    }

    // use the filter to pass the fx as its argument
    var filteredAges = youngAges.filter(filteredAgeRange);
    
    // make sure it's filtering
    console.log(filteredAgeRange);

    // use map method and arrow function to return all the counts for the filtered ages
    var ages = filteredAges.map(year => year.young);

    // check results
    console.log(young);

    // create the trace
    var trace = {
        x: filteredAges,
        y: ages,
        type: "area"
    };

    // do I need to create a loop to also make a trace for each year, so I can plot 

    // create the data array for the plot
    var data = [trace];
    //var data = [trace1, trace2, trace3]

    // define the layout for the plot
    var layout = {
        title: "Testing 1950",
        xaxis: { title: "Young years"},
        yaxis: { title: "count of people in this category"}
    };

    // plot to a div tag with id "stacked-area"
    Plotly.newPlot("area", data, layout);


    // I know I need multiple traces though, and they need to be built
    // for(var j = 0; j < response.data.length; j++)
    
;
// will this sample work?
// var mydatasets = [];
// var colorslist = ["blue","orange","magenta","green","syrup","navy","bumblebee","turkish","army","ferrari"];
// for(var j = 0; j < response.datasets.length; j++) {
//   mydatasets.push({label: response.datasets[j].label, boderColor: colorslist[j], data: response.datasets[j].data.splits(','), spanGraphs: true});
// }
// var subjectsData = {
//   labels: response.labels.split(','),
//   datasets: mydatasets
// }
// var options = {
//   scales: { 
//    yAxes: [{
//       ticks: {
//              beginAtZero: true
//            },
//       scaleLabel: {
//              display: true,
//              labelString: 'Subject Perfomance',
//              fontSize: 14
//            }
//   }]
//  }
// };
// var studentsMarksPerformance = new Chart(markschart, {
//       type: "line",
//       data: subjectsData ,
//       options: options
// });



    // keys = Object.keys(data);
    // values = Object.values(data);

    // // create the trace
    // var trace = {
    //     x: keys,
    //     y: values,
    //     type: "line"
    // };

    // // put the trace into an array
    // var data = [trace];

    // // defines the layout object
    // var layout = {
    //     title: "working age dependency ratio",
    //     xaxis: { title: "Year"},
    //     yaxis: { title: "Count"}
    // };

    // // make the plot
    // Plotly.newPlot("stacked-area", data, layout);


    // // make the year selection function / event handler?
    // d3.selectAll("button").on("click", function() {
    //     // create year selection function
    //     console.log(this);
    // });
// });